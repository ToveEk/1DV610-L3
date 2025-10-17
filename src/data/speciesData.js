/**
 * Species data representing character species, their bonuses, descriptions, and random roll values.
 *
 * @module data/speciesData
 * @author Tove Ek
 * @version 1.0.0
 */

/**
 * The SpeciesData class.
 */
export class SpeciesData {
  /**
   * Creates an instance of the SpeciesData.
   */
  constructor () {
    this.dragonborn = {
      name: 'Dragonborn',
      bonuses: {
        strength: 2,
        charisma: 1
      },
      description: 'Dragonborn are proud, strong, and honorable warriors with draconic ancestry.',
      randomRollValue: 1
    }

    this.dwarf = {
      name: 'Dwarf',
      bonuses: {
        constitution: 2,
        wisdom: 1
      },
      description: 'Dwarves are sturdy and resilient, known for their craftsmanship and combat skills.',
      randomRollValue: 2
    }

    this.elf = {
      name: 'Elf',
      bonuses: {
        dexterity: 2,
        wisdom: 1
      },
      description: 'Elves are agile and graceful, with keen senses and a deep connection to nature.',
      randomRollValue: 3
    }

    this.gnome = {
      name: 'Gnome',
      bonuses: {
        intelligence: 2,
        constitution: 1
      },
      description: 'Gnomes are small and clever, known for their inventiveness and affinity for magic.',
      randomRollValue: 4
    }

    this.halfling = {
      name: 'Halfling',
      bonuses: {
        dexterity: 2,
        charisma: 1
      },
      description: 'Halflings are small and nimble, known for their stealth and luck.',
      randomRollValue: 5
    }

    this.human = {
      name: 'Human',
      bonuses: {
        strength: 1,
        dexterity: 1,
        constitution: 1,
        intelligence: 1,
        wisdom: 1,
        charisma: 1
      },
      description: 'Humans are the most adaptable and ambitious people among the common races.',
      randomRollValue: 6
    }

    this.orc = {
      name: 'Orc',
      bonuses: {
        strength: 2,
        constitution: 1
      },
      description: 'Orcs are strong and aggressive, known for their ferocity in battle.',
      randomRollValue: 7
    }

    this.tiefling = {
      name: 'Tiefling',
      bonuses: {
        charisma: 2,
        intelligence: 1
      },
      description: 'Tieflings are charismatic and cunning, with infernal heritage that grants them unique abilities.',
      randomRollValue: 8
    }
  }

  /**
   * Returns the list of all character species.
   *
   * @returns {Array} - The list of all species.
   */
  getSpeciesList () {
    return [
      this.dragonborn,
      this.dwarf,
      this.elf,
      this.gnome,
      this.halfling,
      this.human,
      this.orc,
      this.tiefling
    ]
  }
}
