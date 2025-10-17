/**
 * CharacterController handles character-related requests.
 *
 * @module controllers/characterController
 * @author Tove Ek
 * @version 1.0.0
 */

import { Character } from '../models/characterModel.js'
import { SpeciesData } from '../data/speciesData.js'
import { classList } from '../data/classData.js'

/**
 * The CharacterController class.
 */
export class CharacterController {
  /**
   * Creates an instance of the CharacterController.
   */
  constructor () {
    this.character = new Character()
    this.speciesData = new SpeciesData()
  }

  /**
   * Renders the character name page.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  renderCharacterNamePage (req, res) {
    res.render('characterCreator/name')
  }

  /**
   * Handles adding the character's name.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  addCharacterName (req, res) {
    this.character.name = req.body.characterName

    console.log('New character created: ', this.character)

    this.renderCharacterSpeciesPage(req, res)
  }

  /**
   * Renders the character species page.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  renderCharacterSpeciesPage (req, res) {
    res.render('characterCreator/species', { speciesList: this.speciesData.getSpeciesList() })
  }

  /**
   * Handles adding the character's species.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  addCharacterSpecies (req, res) {
    console.log('Received species: ', req.body.characterSpecies)
    console.log('Recieved d8 result: ', req.body.d8Result)

    if (req.body.d8Result) {
      this.#randomRollForSpecies(req, res)
    } else {
      this.character.species = req.body.characterSpecies

      console.log('Current character: ', this.character)

      this.renderCharacterClassPage(req, res)
    }
  }

  /**
   * Handles random species selection based on d8 roll result.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  #randomRollForSpecies (req, res) {
    const speciesList = this.speciesData.getSpeciesList()
    const speciesRandomRollValues = speciesList.map(species => species.randomRollValue)

    console.log('Species random roll values: ', speciesRandomRollValues)

    const d8Result = parseInt(req.body.d8Result)

    if (speciesRandomRollValues.includes(d8Result)) {
      const selectedSpecies = speciesList.find(species => species.randomRollValue === d8Result)
      this.character.species = selectedSpecies.name
      console.log('Matched species:', selectedSpecies.name)
    } else {
      console.log('No species matches the roll result. Try again')
      res.redirect('/character-species')
      return
    }

    console.log('Selected species: ', this.character.species)
    console.log('Current character: ', this.character)

    this.renderCharacterClassPage(req, res)
  }

  /**
   * Renders the character class page.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  renderCharacterClassPage (req, res) {
    res.render('characterCreator/classes', { classList: Object.values(classList) })
  }

  /**
   * Handles adding the character's class.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  addCharacterClass (req, res) {
    console.log('Received class: ', req.body.characterClass)

    this.character.className = req.body.characterClass

    console.log('Current character: ', this.character)

    this.renderCharacterAbilitiesPage(req, res)
  }

  /**
   * Renders the character abilities page.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  renderCharacterAbilitiesPage (req, res) {
    res.render('characterCreator/abilities')
  }

  /**
   * Handles adding the character's abilities.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  addCharacterAbilities (req, res) {
    // ta emot attributdata från formuläret
  }

  /**
   * Renders the character summary page.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  renderCharacterSummaryPage (req, res) {
    res.render('characterCreator/summary')
  }
}

// TODO: private validation methods for each step?
