import Collector, { ICollector } from '@/models/collector'

export async function create(data: ICollector): Promise<ICollector> {
  const collector = await Collector.create(data)

  return collector
}

export async function findById(id: string): Promise<ICollector | null> {
  const collector = await Collector.findOne({ id })

  return collector
}

export async function findByEmail(email: string): Promise<ICollector | null> {
  const collector = await Collector.findOne({ email })

  return collector
}
