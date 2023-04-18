import { Router } from 'express'

import { registerCollector } from './http/controllers/collector-controller'

export const router = Router()

const apiString = '/cataki-api/v1/'

const collectorApiString = apiString + 'collector/'
router.post(collectorApiString, registerCollector)
