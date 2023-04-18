import { model, Schema } from 'mongoose'

export interface ICollector {
  id?: string
  name?: string
  email?: string
  phone?: number
}

const CollectorSchema: Schema = new Schema(
  {
    id: { type: String, unique: true },
    name: { type: String },
    email: { type: String, unique: true },
    phone: { type: Number },
  },
  {
    timestamps: true,
  },
)

CollectorSchema.set('toJSON', {
  transform: function (_doc, ret) {
    delete ret._id
    delete ret.__v
  },
})

const Collector = model<ICollector>('collector', CollectorSchema)

export default Collector
