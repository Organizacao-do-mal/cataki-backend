import { env } from '@/env'
import mongoose from 'mongoose'

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(env.MONGO_URI)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Failed to connect to MongoDB', error)
    process.exit(-1)
  }

  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err)
    process.exit(-1)
  })

  mongoose.connection.on('disconnected', () => {
    console.warn('MongoDB disconnected')
  })
}
