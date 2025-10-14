/**
 * CharacterController handles character-related requests.
 *
 * @module controllers/characterController
 * @author Tove Ek
 * @version 1.0.0
 */

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
   * Creates a new character.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  createCharacter (req, res) {
    // anropar metoderna nedan för att skapa karaktären
  }

  /**
   * Handles adding the character's name.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  addCharacterName (req, res) {
    // ta emot namndata från formuläret
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
   * Handles adding the character's class.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  addCharacterClass (req, res) {
    // ta emot klassdata från formuläret
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
}
