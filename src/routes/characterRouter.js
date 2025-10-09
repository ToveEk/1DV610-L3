/**
 * CharacterRouter defines routes for character-related endpoints.
 * 
 * @module routes/characterRouter
 * @author Tove Ek
 * @version 1.0.0
 */

import express from 'express'
import { CharacterController } from '../controllers/characterController.js'

const characterController = new CharacterController()

export const characterRouter = express.Router()

characterRouter.get('/', (req, res) => {
  characterController.characterCreator(req, res)
})