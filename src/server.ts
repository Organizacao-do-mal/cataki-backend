import express from 'express'
import cors from 'cors'

import { env } from './env'

import { router } from './router'

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(env.PORT, () => {
  console.log(`🚀 HTTP Server Running! on Port: ${env.PORT}`)
})
