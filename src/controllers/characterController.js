/**
 * CharacterController handles character-related requests.
 *
 * @module controllers/characterController
 * @author Tove Ek
 * @version 1.0.0
 */

import { Character } from '../models/characterModel.js'
import { SpeciesData } from '../data/speciesData.js'
import { ClassData } from '../data/classData.js'
import { DiceController } from './diceController.js'

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
    this.classData = new ClassData()
    this.diceController = new DiceController()
  }

  /**
   * Renders the character name page.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  renderCharacterNamePage (req, res) {
    try {
      res.render('characterCreator/name')
    } catch (error) {
      throw new Error('Error rendering character name page: ' + error.message)
    }
  }

  /**
   * Handles adding the character's name.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  addCharacterName (req, res) {
    try {
      this.character.name = req.body.characterName

      console.log('New character created: ', this.character)

      this.renderCharacterSpeciesPage(req, res)
    } catch (error) {
      throw new Error('Error adding character name: ' + error.message)
    }
  }

  /**
   * Renders the character species page.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  renderCharacterSpeciesPage (req, res) {
    try {
      res.render('characterCreator/species', { speciesList: this.speciesData.getSpeciesList() })
    } catch (error) {
      throw new Error('Error rendering character species page: ' + error.message)
    }
  }

  /**
   * Handles adding the character's species.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  addCharacterSpecies (req, res) {
    try {
      console.log('Received species: ', req.body.characterSpecies)

      if (req.body.diceNotation) {
        this.#handleRandomSelection(req, res)
      } else {
        this.character.species = req.body.characterSpecies

        console.log('Current character: ', this.character)

        this.renderCharacterClassPage(req, res)
      }
    } catch (error) {
      throw new Error('Error adding character species: ' + error.message)
    }
  }

  /**
   * Handles random species selection based on d8 roll result.
   *
   * @param {number} rollResult - The result of the dice roll
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  #addRandomCharacterSpecies (rollResult, req, res) {
    const speciesList = this.speciesData.getSpeciesList()
    const speciesRandomRollValues = speciesList.map(species => species.randomRollValue)

    if (!speciesRandomRollValues.includes(rollResult)) {
      throw new Error('Roll result doesn\'t match any species random roll value.')
    } else {
      const selectedSpecies = speciesList.find(species => species.randomRollValue === rollResult)
      this.character.species = selectedSpecies.name
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
    try {
      res.render('characterCreator/classes', { classList: this.classData.getClassList() })
    } catch (error) {
      throw new Error('Error rendering character class page: ' + error.message)
    }
  }

  /**
   * Handles adding the character's class.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  addCharacterClass (req, res) {
    try {
      console.log('Received class: ', req.body.characterClass)

      if (req.body.diceNotation) {
        this.#handleRandomSelection(req, res)
      } else {
        this.character.className = req.body.characterClass

        console.log('Current character: ', this.character)

        this.renderCharacterAbilitiesPage(req, res)
      }
    } catch (error) {
      throw new Error('Error adding character class: ' + error.message)
    }
  }

  /**
   * Handles random class selection based on d12 roll result.
   *
   * @param {number} rollResult - The result of the dice roll
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  #addRandomCharacterClass (rollResult, req, res) {
    const classList = this.classData.getClassList()
    const classRandomRollValues = classList.map(className => className.randomRollValue)

    if (!classRandomRollValues.includes(rollResult)) {
      throw new Error('Roll result doesn\'t match any class random roll value.')
    } else {
      const selectedClass = classList.find(className => className.randomRollValue === rollResult)
      this.character.className = selectedClass.name
    }

    console.log('Selected class: ', this.character.className)
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
    try {
      res.render('characterCreator/abilities')
    } catch (error) {
      throw new Error('Error rendering character abilities page: ' + error.message)
    }
  }

  /**
   * Handles adding the character's abilities.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  addCharacterAbilities (req, res) {
    try {
      // TODO: implement ability functionality
    } catch (error) {
      throw new Error('Error adding character abilities: ' + error.message)
    }
  }

  /**
   * Renders the character summary page.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  renderCharacterSummaryPage (req, res) {
    try {
      res.render('characterCreator/summary')
    } catch (error) {
      throw new Error('Error rendering character summary page: ' + error.message)
    }
  }

  /**
   * Handles random selection based on dice notation.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  #handleRandomSelection (req, res) {
    const diceNotation = req.body.diceNotation

    this.diceController.rollDice(diceNotation)

    const rollResult = this.diceController.rollResult

    if (diceNotation === 'd8') {
      this.#addRandomCharacterSpecies(rollResult, req, res)
    } else if (diceNotation === 'd12') {
      this.#addRandomCharacterClass(rollResult, req, res)
    } else if (diceNotation === 'd20') {
      // handle ability selection
    } else {
      throw new Error('Invalid dice notation for random selection.')
    }
  }
}

// TODO: private validation methods for each step?
