import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signinInput, signupInput } from "@abhishek-y2003/medium-common"

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>();


userRouter.post('/signup', async (c) => {
  const body = await c.req.json()
  const {success} = signupInput.safeParse(body);

  if(!success){
    c.status(411)
    return c.json({
      msg:"Incorrect Inputs"
    })
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password
      }
    })

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
      token: token
    });
  } catch (error) {

    return c.json({
      msg: "Error "
    })

  }
})

userRouter.post('/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())

  const body = await c.req.json();
  const {success} = signinInput.safeParse(body);
  if(!success){
    c.status(411)
    return c.json({
      msg:"Incorrect Inputs"
    })
  }
  try {

    const userExists = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password,
      }
    })

    if (!userExists) {
      return c.json({
        msg: "User doesnt exists"
      })
    }
    const token = await sign({ id: userExists.id }, c.env.JWT_SECRET);
    return c.json({
      token: token,
      msg: "User Signed up!!"
    })
  } catch (error) {
    return c.json({
      error,
      msg: "loged in error"
    })
  }

})