/**
 * Main router that combines all sub-routers.
 *
 * @module routes/router
 * @author Tove Ek
 * @version 1.0.0
 */

import express from 'express'
import { homeRouter } from './homeRouter.js'
import { characterRouter } from './characterRouter.js'

export const router = express.Router()

router.use('/', homeRouter)
router.use('/', characterRouter)
