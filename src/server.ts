/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-floating-promises */
import express from 'express'
import os from 'node:os'
import { prisma } from './db'

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (_, response) => {
  const hostname = os.hostname()
  response.send(`Hello World from ${hostname}!`)
})

app.get('/users', async (_, response) => {
  prisma.user.create({
    data: {
      name: 'suetham',
      email: 'suetham@me.com'
    }
  }).then(() => {
    console.log('user created')
  })

  const users = await prisma.user.findMany()

  response.status(200).json({ users })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
