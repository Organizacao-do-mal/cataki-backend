import { ICollector } from '@/models/collector'
import {
  create,
  findByEmail,
  findById,
} from '@/repositories/mongoose/mongoose-collector-repository'
import { ClientException } from '@/utils/errors/exception'

export async function createCollectorService(
  data: ICollector,
): Promise<ICollector> {
  if (!data.email) {
    throw new ClientException('email is required', 400)
  }

  const collectorExists = await findByEmail(data.email)

  if (collectorExists) {
    throw new ClientException('collector already exists', 400)
  }

  const collector = await create(data)

  if (!collector) {
    throw new ClientException('collector not created', 400)
  }

  return collector
}

export async function findCollectorByIdService(
  id: string,
): Promise<ICollector> {
  if (!id) {
    throw new ClientException('parameter missing', 400)
  }

  const collector = await findById(id)

  if (!collector) {
    throw new ClientException('collector not found', 404)
  }

  return collector
}
