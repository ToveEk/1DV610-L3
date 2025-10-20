import { Parser } from './parser.js'
import { History } from './history.js'

/**
 * Class representing different rules for dice rolling.
 */
export class Rules {
  parser = new Parser()
  history = new History()

  /**
   * Rolls dice with an advantage (e.g., 2d20 and keep the highest).
   *
   * @param {object} parsedDice - The parsed dice information.
   * @returns {number} - The highest roll when rolling with advantage.
   */
  rollWithAdvantage (parsedDice) {
    const rolls = []

    for (let i = 0; i < parsedDice.numberOfDice; i++) {
      const singleRoll = Math.floor(Math.random() * parsedDice.sides) + 1
      rolls.push(singleRoll)
    }

    const highestRoll = Math.max(...rolls)

    this.history.addRollToHistory(highestRoll)

    const resultMessage = `You rolled a ${highestRoll} with advantage! (Rolls: ${rolls.join(', ')})`

    return resultMessage
  }

  /**
   * Rolls dice with a disadvantage (e.g., 2d20 and keep the lowest).
   *
   * @param {object} parsedDice - The parsed dice information.
   * @returns {number} - The lowest roll when rolling with disadvantage.
   */
  rollWithDisadvantage (parsedDice) {
    const rolls = []

    for (let i = 0; i < parsedDice.numberOfDice; i++) {
      const singleRoll = Math.floor(Math.random() * parsedDice.sides) + 1
      rolls.push(singleRoll)
    }

    const lowestRoll = Math.min(...rolls)

    const resultMessage = `You rolled a ${lowestRoll} with disadvantage! (Rolls: ${rolls.join(', ')})`

    this.history.addRollToHistory(lowestRoll)

    return resultMessage
  }

  /**
   * Handles the case of rolling a natural twenty.
   *
   * @returns {string} - Message indicating a natural 20 was rolled.
   */
  naturalTwenty () {
    const natTwentyMessage = 'You rolled a natural 20! Critical success!'
    // only return the message, do not add to the roll
    return natTwentyMessage
  }

  /**
   * Handles the case of rolling a natural one.
   *
   * @returns {string} - Message indicating a natural 1 was rolled.
   */
  naturalOne () {
    const natOneMessage = 'You rolled a natural 1! Critical failure!'
    // only return the message, do not subtract from the roll
    return natOneMessage
  }
}
