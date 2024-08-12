import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/vi/signup', (c)=>{
  return c.text('Helllo from signup route')
})

app.post('/api/vi/signin', (c)=>{
  return c.text('Helllo from signin route')
})


app.post('/api/vi/blog', (c)=>{
  return c.text('Helllo here you can upload your blog')
})

app.get('/api/vi/blog/:id', (c)=>{
  return c.text('Hey, here you get all the vlogs')
})




export default app
