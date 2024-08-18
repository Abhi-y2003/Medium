import { PrismaClient, User } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { decode, verify } from 'hono/jwt'

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
    },
    Variables: {
        userId: number,
    }
}>();

blogRouter.use("/*", async (c, next) => {
    const authHeader = c.req.header("Authorization") || "";

    const user = await verify(authHeader, c.env.JWT_SECRET) as User;

    if (user) {
        c.set("userId", user.id);
        await next();
    } else {
        return c.json({
            message: "You are not logged in"
        })
    }

})


//Route to Create a blog -----------------------------------------------------------------------

blogRouter.post('/create', async (c) => {
    try {
        const body = await c.req.json();
        const authorId = c.get("userId")
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());

        const blog = await prisma.blog.create({
            data: {
                title: body.title,
                contnet: body.contnet,
                authorId: authorId,
            }
        })
        return c.json({
            id: blog.id,
        })
    } catch (error) {
        return c.json({
            message: "Blog cannot be created",
            error
        })
    }

})

//Route to update a Blog ------------------------------------------------------------------------------------

blogRouter.put('/', async (c) => {

    try {
        const body = await c.req.json();

        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());

        const blog = await prisma.blog.update({
            where: {
                id: body.id,
            },
            data: {
                title: body.title,
                contnet: body.contnet,
            }
        })

        return c.json({
            id: blog.id
        })
    }
    catch (error) {
        return c.json({
            message: "Blog cannot be updated",
            error,
        })
    }

})

//Route to GET a Blog ------------------------------------------------------------------------------------

blogRouter.get('/:id', async (c) => {
    try {

        const id =  c.req.param("id");

        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());

        const blog = await prisma.blog.findFirst({
            where: {
                id: Number(id),
            },
        })
        return c.json({
            id:id,
        })
    } catch (error) {
        return c.json({
            message: "BLog cannot be fetched"
        })
    }
})

//Route to GET all Blogs ------------------------------------------------------------------------------------
blogRouter.get('/blog ', async (c) => {
    try {
        const body = await c.req.json();

        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());

        const blog = await prisma.blog.findMany();
        return c.json({
            blog
        })
    } catch (error) {
        return c.json({
            message: "Blogs cannot be fetched",
            error
        })
    }

})