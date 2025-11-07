/**
 * Class representing the ability data for a character.
 *
 * @module data/abilityData
 * @author Tove Ek
 * @version 1.0.0
 */
export class AbilityData {
  /**
   * Creates an instance of the AbilityData.
   */
  constructor () {
    this.strength = {
      name: 'Strength',
      shortName: 'STR',
      description: 'Measures bodily power, athletic training, and the extent to which you can exert raw physical force.',
      score: 0
    }

    this.dexterity = {
      name: 'Dexterity',
      shortName: 'DEX',
      description: 'Measures agility, reflexes, and balance.',
      score: 0
    }

    this.constitution = {
      name: 'Constitution',
      shortName: 'CON',
      description: 'Measures health, stamina, and vital force.',
      score: 0
    }

    this.intelligence = {
      name: 'Intelligence',
      shortName: 'INT',
      description: 'Measures mental acuity, accuracy of recall, and the ability to reason.',
      score: 0
    }

    this.wisdom = {
      name: 'Wisdom',
      shortName: 'WIS',
      description: 'Measures perception and insight.',
      score: 0
    }

    this.charisma = {
      name: 'Charisma',
      shortName: 'CHA',
      description: 'Measures force of personality, persuasiveness, and leadership.',
      score: 0
    }
  }

  /**
   * Returns a list of all ability objects.
   *
   * @returns {Array} - List of all ability objects.
   */
  getAbilityList () {
    return [
      this.strength,
      this.dexterity,
      this.constitution,
      this.intelligence,
      this.wisdom,
      this.charisma
    ]
  }
}
