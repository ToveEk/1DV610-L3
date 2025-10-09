/**
 * CharacterController handles character-related requests.
 * 
 * @module controllers/characterController
 * @author Tove Ek
 * @version 1.0.0
 */

export class CharacterController {
    renderCharacterCreatorPage(req, res) {
        res.render('characterCreator/characterCreator')
    }

    createCharacter(req, res) {
        // anropar metoderna nedan för att skapa karaktären
    }

    addCharacterName(req, res) {
        // ta emot namndata från formuläret
    }

    addCharacterSpecies(req, res) {
        // ta emot rasdata från formuläret
    }

    addCharacterClass(req, res) {
        // ta emot klassdata från formuläret
    }

    addCharacterAbilities(req, res) {
        // ta emot attributdata från formuläret
    }
}