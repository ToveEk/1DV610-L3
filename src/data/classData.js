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
  description: 'A fierce warrior of primitive background who can enter a battle rage.'
}

const bard = {
  name: 'Bard',
  primaryAbility: 'Charisma',
  description: 'An inspiring magician whose power derives from music and poetry.'
}

const cleric = {
  name: 'Cleric',
  primaryAbility: 'Wisdom',
  description: 'A priestly champion who wields divine magic in service of a higher power.'
}

const druid = {
  name: 'Druid',
  primaryAbility: 'Wisdom',
  description: 'A spellcaster who draws on the power of nature.'
}

const fighter = {
  name: 'Fighter',
  primaryAbility: 'Strength or Dexterity',
  description: 'A master of martial combat, skilled with a variety of weapons and armor.'
}

const monk = {
  name: 'Monk',
  primaryAbility: 'Dexterity and Wisdom',
  description: 'A master of martial arts, capable of harnessing the power of the body and mind.'
}

const paladin = {
  name: 'Paladin',
  primaryAbility: 'Strength and Charisma',
  description: 'A holy warrior bound to a sacred oath.'
}

const ranger = {
  name: 'Ranger',
  primaryAbility: 'Dexterity and Wisdom',
  description: 'A skilled tracker and hunter, adept at surviving in the wilderness.'
}

const rogue = {
  name: 'Rogue',
  primaryAbility: 'Dexterity',
  description: 'A stealthy and agile character, skilled in deception and thievery.'
}

const sorcerer = {
  name: 'Sorcerer',
  primaryAbility: 'Charisma',
  description: 'A spellcaster who draws on inherent magic from their bloodline.'
}

const warlock = {
  name: 'Warlock',
  primaryAbility: 'Charisma',
  description: 'A spellcaster who makes pacts with otherworldly beings to gain power.'
}

const wizard = {
  name: 'Wizard',
  primaryAbility: 'Intelligence',
  description: 'A scholarly magic-user capable of manipulating the structures of reality.'
}

export const classList = [barbarian, bard, cleric, druid, fighter, monk, paladin, ranger, rogue, sorcerer, warlock, wizard]
// används för att visa information om klasser i class view
