/**
 * Class data for character classes and their attribute bonuses.
 *
 * @module data/classData
 * @author Tove Ek
 * @version 1.0.0
 */

const barbarian = {
  primaryAbility: 'strength',
  description: 'A fierce warrior of primitive background who can enter a battle rage.'
}

const bard = {
  primaryAbility: 'charisma',
  description: 'An inspiring magician whose power derives from music and poetry.'
}

const cleric = {
  primaryAbility: 'wisdom',
  description: 'A priestly champion who wields divine magic in service of a higher power.'
}

const druid = {
  primaryAbility: 'wisdom',
  description: 'A spellcaster who draws on the power of nature.'
}

const fighter = {
  primaryAbility: 'strength' || 'dexterity',
  description: 'A master of martial combat, skilled with a variety of weapons and armor.'
}

const monk = {
  primaryAbility: 'dexterity' && 'wisdom',
  description: 'A master of martial arts, capable of harnessing the power of the body and mind.'
}

const paladin = {
  primaryAbility: 'strength' && 'charisma',
  description: 'A holy warrior bound to a sacred oath.'
}

const ranger = {
  primaryAbility: 'dexterity' && 'wisdom',
  description: 'A skilled tracker and hunter, adept at surviving in the wilderness.'
}

const rogue = {
  primaryAbility: 'dexterity',
  description: 'A stealthy and agile character, skilled in deception and thievery.'
}

const sorcerer = {
  primaryAbility: 'charisma',
  description: 'A spellcaster who draws on inherent magic from their bloodline.'
}

const warlock = {
  primaryAbility: 'charisma',
  description: 'A spellcaster who makes pacts with otherworldly beings to gain power.'
}

const wizard = {
  primaryAbility: 'intelligence',
  description: 'A scholarly magic-user capable of manipulating the structures of reality.'
}

export { barbarian, bard, cleric, druid, fighter, monk, paladin, ranger, rogue, sorcerer, warlock, wizard }
// används för att visa information om klasser i class view
