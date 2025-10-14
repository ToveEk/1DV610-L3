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

characterRouter.get('/character-name', (req, res) => {
  characterController.renderCharacterNamePage(req, res)
})

characterRouter.post('/character-name', (req, res) => {
  characterController.addCharacterName(req, res)
})

characterRouter.get('/character-species', (req, res) => {
  characterController.renderCharacterSpeciesPage(req, res)
})

characterRouter.post('/character-species', (req, res) => {
  characterController.addCharacterSpecies(req, res)
})

characterRouter.get('/character-class', (req, res) => {
  characterController.renderCharacterClassPage(req, res)
})

characterRouter.post('/character-class', (req, res) => {
  characterController.addCharacterClass(req, res)
})

characterRouter.get('/character-abilities', (req, res) => {
  characterController.renderCharacterAbilitiesPage(req, res)
})

characterRouter.post('/character-abilities', (req, res) => {
  characterController.addCharacterAbilities(req, res)
})

characterRouter.get('/character-summary', (req, res) => {
  characterController.renderCharacterSummaryPage(req, res)
})
