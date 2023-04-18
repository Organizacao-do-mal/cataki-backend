import { ICollector } from '@/models/collector'
import { randomUUID } from 'node:crypto'

const items: ICollector[] = []

export async function create(data: ICollector): Promise<ICollector> {
  const collector = {
    id: randomUUID(),
    ...data,
  }

  items.push(collector)

  return collector
}

export async function findById(id: string): Promise<ICollector | null> {
  const collector = items.find((item) => item.id === id)

  if (!collector) {
    return null
  }

  return collector
}

export async function findByEmail(email: string): Promise<ICollector | null> {
  const collector = await items.find((item) => item.email === email)

  if (!collector) {
    return null
  }

  return collector
}
