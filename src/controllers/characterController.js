/**
 * CharacterController handles character-related requests.
 * 
 * @module controllers/characterController
 * @author Tove Ek
 * @version 1.0.0
 */

export class CharacterController {
    characterCreator(req, res) {
        res.render('characterCreator/characterCreator')
    }
}