/**
 * Class data for character classes and their attribute bonuses.
 *
 * @module data/classData
 * @author Tove Ek
 * @version 1.0.0
 */

/**
 *
 */
export class ClassData {
  /**
   * Creates an instance of the ClassData.
   */
  constructor () {
    this.barbarian = {
      name: 'Barbarian',
      primaryAbility: 'Strength',
      description: 'A fierce warrior of primitive background who can enter a battle rage.',
      randomRollValue: 1
    }

    this.bard = {
      name: 'Bard',
      primaryAbility: 'Charisma',
      description: 'An inspiring magician whose power derives from music and poetry.',
      randomRollValue: 2
    }

    this.cleric = {
      name: 'Cleric',
      primaryAbility: 'Wisdom',
      description: 'A priestly champion who wields divine magic in service of a higher power.',
      randomRollValue: 3
    }

    this.druid = {
      name: 'Druid',
      primaryAbility: 'Wisdom',
      description: 'A spellcaster who draws on the power of nature.',
      randomRollValue: 4
    }

    this.fighter = {
      name: 'Fighter',
      primaryAbility: 'Strength or Dexterity',
      description: 'A master of martial combat, skilled with a variety of weapons and armor.',
      randomRollValue: 5
    }

    this.monk = {
      name: 'Monk',
      primaryAbility: 'Dexterity and Wisdom',
      description: 'A master of martial arts, capable of harnessing the power of the body and mind.',
      randomRollValue: 6
    }

    this.paladin = {
      name: 'Paladin',
      primaryAbility: 'Strength and Charisma',
      description: 'A holy warrior bound to a sacred oath.',
      randomRollValue: 7
    }

    this.ranger = {
      name: 'Ranger',
      primaryAbility: 'Dexterity and Wisdom',
      description: 'A skilled tracker and hunter, adept at surviving in the wilderness.',
      randomRollValue: 8
    }

    this.rogue = {
      name: 'Rogue',
      primaryAbility: 'Dexterity',
      description: 'A stealthy and agile character, skilled in deception and thievery.',
      randomRollValue: 9
    }

    this.sorcerer = {
      name: 'Sorcerer',
      primaryAbility: 'Charisma',
      description: 'A spellcaster who draws on inherent magic from their bloodline.',
      randomRollValue: 10
    }

    this.warlock = {
      name: 'Warlock',
      primaryAbility: 'Charisma',
      description: 'A spellcaster who makes pacts with otherworldly beings to gain power.',
      randomRollValue: 11
    }

    this.wizard = {
      name: 'Wizard',
      primaryAbility: 'Intelligence',
      description: 'A scholarly magic-user capable of manipulating the structures of reality.',
      randomRollValue: 12
    }
  }

  /**
   * Returns the list of all character classes.
   *
   * @returns {Array} - The list of all classes.
   */
  getClassList () {
    return [
      this.barbarian,
      this.bard,
      this.cleric,
      this.druid,
      this.fighter,
      this.monk,
      this.paladin,
      this.ranger,
      this.rogue,
      this.sorcerer,
      this.warlock,
      this.wizard
    ]
  }
}
