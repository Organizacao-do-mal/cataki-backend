import express from 'express'
import cors from 'cors'

import { env } from '@/env'

import { router } from './router'
import { connectToDatabase } from '@/lib/mongoose'

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

connectToDatabase()
  .then(() => {
    app.listen(env.PORT, () => {
      console.log(`🚀 HTTP Server Running! on Port: ${env.PORT}`)
    })
  })
  .catch((err) => {
    console.error('Failed to connect to database', err)
  })
