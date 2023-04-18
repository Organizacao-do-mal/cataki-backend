import { createCollectorService } from '@/services/collector-service'
import { ClientException } from '@/utils/errors/exception'
import { Request, Response } from 'express'
import { z } from 'zod'

export async function registerCollector(req: Request, res: Response) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.number(),
  })

  const { email, name, phone } = registerBodySchema.parse(req.body)

  try {
    const collector = await createCollectorService({ email, name, phone })

    res.status(201).send(collector)
  } catch (e) {
    if (e instanceof ClientException) {
      res.status(e.code).send(e.message)
    }
  }
}
