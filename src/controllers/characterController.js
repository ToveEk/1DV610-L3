/**
 * CharacterController handles character-related requests.
 *
 * @module controllers/characterController
 * @author Tove Ek
 * @version 1.0.0
 */

import { Character } from '../models/characterModel.js'

/**
 * The CharacterController class.
 */
export class CharacterController {
  /**
   * Renders the character name input page.
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
    // spara namnet i characterObject
    // redirecta till nästa vy (species)

    const newCharacter = new Character(
      req.body.characterName
    )

    console.log('New character created: ', newCharacter)

    this.renderCharacterSpeciesPage(req, res)
  }

  /**
   * Renders the character species input page.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  renderCharacterSpeciesPage (req, res) {
    res.render('characterCreator/species')
  }

  /**
   * Handles adding the character's species.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  addCharacterSpecies (req, res) {
    // ta emot rasdata från formuläret
  }

  /**
   * Renders the character class input page.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  renderCharacterClassPage (req, res) {
    res.render('characterCreator/class')
  }

  /**
   * Handles adding the character's class.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  addCharacterClass (req, res) {
    // ta emot klassdata från formuläret
  }

  /**
   * Renders the character abilities input page.
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
