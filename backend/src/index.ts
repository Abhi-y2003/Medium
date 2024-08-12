import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from 'hono/jwt'
import { Context } from "hono";

interface CustomContex extends Context {
  userId?: string;
}

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string
    JWT_SECRET: string
	}
}>();


app.use('/api/v1/blog/*', async (c: CustomContex, next) => {
  const header = c.req.header("authorization") || "";
  const response = await verify(header, c.env.JWT_SECRET);

  if(response.id){
    c.set('userId', response.id);
    next()
  }else{
    return c.json({
      msg:"Authentication failed"
    })
  }

  
  await next()
})


app.post("/api/v1/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    
  }).$extends(withAccelerate());
 
  //writing signup bussiness logic
  const body = await c.req.json()

  const user = await prisma.user.create({
    data:{
      name: body.name,
      email: body.email,
      password: body.password,
    }
  })

  const token = await sign({id:user.id}, c.env.JWT_SECRET);
  return c.json({
    jwt: token
  });
});

app.post("/api/vi/signin", (c) => {
  return c.text("Helllo from signin route");
});

app.post("/api/vi/blog", (c) => {
  return c.text("Helllo here you can upload your blog");
});

app.get("/api/vi/blog/:id", (c) => {
  return c.text("Hey, here you get all the vlogs");
});

export default app;
