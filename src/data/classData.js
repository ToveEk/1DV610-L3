/**
 * Class data for character classes and their attribute bonuses.
 *
 * @module data/classData
 * @author Tove Ek
 * @version 1.0.0
 */

const barbarian = {
  name: 'Barbarian',
  primaryAbility: 'Strength',
  description: 'A fierce warrior of primitive background who can enter a battle rage.',
  randomRollValue: 1
}

const bard = {
  name: 'Bard',
  primaryAbility: 'Charisma',
  description: 'An inspiring magician whose power derives from music and poetry.',
  randomRollValue: 2
}

const cleric = {
  name: 'Cleric',
  primaryAbility: 'Wisdom',
  description: 'A priestly champion who wields divine magic in service of a higher power.',
  randomRollValue: 3
}

const druid = {
  name: 'Druid',
  primaryAbility: 'Wisdom',
  description: 'A spellcaster who draws on the power of nature.',
  randomRollValue: 4
}

const fighter = {
  name: 'Fighter',
  primaryAbility: 'Strength or Dexterity',
  description: 'A master of martial combat, skilled with a variety of weapons and armor.',
  randomRollValue: 5
}

const monk = {
  name: 'Monk',
  primaryAbility: 'Dexterity and Wisdom',
  description: 'A master of martial arts, capable of harnessing the power of the body and mind.',
  randomRollValue: 6
}

const paladin = {
  name: 'Paladin',
  primaryAbility: 'Strength and Charisma',
  description: 'A holy warrior bound to a sacred oath.',
  randomRollValue: 7
}

const ranger = {
  name: 'Ranger',
  primaryAbility: 'Dexterity and Wisdom',
  description: 'A skilled tracker and hunter, adept at surviving in the wilderness.',
  randomRollValue: 8
}

const rogue = {
  name: 'Rogue',
  primaryAbility: 'Dexterity',
  description: 'A stealthy and agile character, skilled in deception and thievery.',
  randomRollValue: 9
}

const sorcerer = {
  name: 'Sorcerer',
  primaryAbility: 'Charisma',
  description: 'A spellcaster who draws on inherent magic from their bloodline.',
  randomRollValue: 10
}

const warlock = {
  name: 'Warlock',
  primaryAbility: 'Charisma',
  description: 'A spellcaster who makes pacts with otherworldly beings to gain power.',
  randomRollValue: 11
}

const wizard = {
  name: 'Wizard',
  primaryAbility: 'Intelligence',
  description: 'A scholarly magic-user capable of manipulating the structures of reality.',
  randomRollValue: 12
}

export const classList = [barbarian, bard, cleric, druid, fighter, monk, paladin, ranger, rogue, sorcerer, warlock, wizard]
// används för att visa information om klasser i class view
