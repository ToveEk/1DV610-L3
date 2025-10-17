/**
 * DiceController handles dice rolling requests.
 *
 * @module controllers/diceController
 * @author Tove Ek
 * @version 1.0.0
 */

import { Dice } from '../modules/dice-module/src/dice.js'

/**
 * The DiceController class.
 */
export class DiceController {
  /**
   * Creates an instance of the DiceController.
   */
  constructor () {
    this.dice = new Dice()
    this.rollResult = 0
  }

  /**
   * Rolls dice based on the provided dice notation.
   *
   * @param {string} diceNotation - The dice notation string (e.g., "2d6").
   * @returns {{message: string, value: number|null}} - The result message and numeric roll value (if available).
   */
  rollDice (diceNotation) {
    const resultMessage = this.dice.startRolling(diceNotation)
    // The Dice instance stores the numeric roll in `this.roll` when a roll occurs.

    this.rollResult = this.dice.roll

    return { message: resultMessage, value: this.rollResult }
  }
}
