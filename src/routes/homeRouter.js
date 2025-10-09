/**
 * HomeRouter defines routes for home-related endpoints.
 * 
 * @module routes/homeRouter
 * @author Tove Ek
 * @version 1.0.0
 */

import express from 'express'
import { HomeController } from '../controllers/homeController.js'

const homeController = new HomeController()

export const homeRouter = express.Router()

homeRouter.get('/', (req, res) => {
  homeController.index(req, res)
})
