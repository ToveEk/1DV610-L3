/**
 * Script for handling dice rolls on the species, class and ability score pages.
 * Uses the Dice module to perform rolls and updates the UI accordingly.
 *
 * @module diceScript
 * @author Tove Ek
 * @version 1.0.0
 */

import { Dice } from '../scripts/dice-module/dice.js'

document.addEventListener('DOMContentLoaded', () => {
  const diceRoller = new Dice()

  // TODO: Add event listeners to buttons and update the UI with roll results
  // matcha resultatet med species randomRollValue och class randomRollValue

  document.getElementById('rollSpeciesButton').addEventListener('click', () => {
    const rollResult = diceRoller.startRolling('d8')
    console.log('Rolled a d8 for species:', rollResult)

    // matcha resultatet med species randomRollValue


    if (selectedSpecies) {
      console.log('Selected species:', selectedSpecies.name)
      // Uppdatera UI eller skicka data till servern som behövs
    } else {
      console.log('No species matches the roll result.')
    }
  })
})

// SKIT I DETTA KÖR PÅ BACKEND ISTÄLLET
