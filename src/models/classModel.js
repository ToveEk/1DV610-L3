/**
 * Class model representing character classes.
 * 
 * @module models/classModel
 * @author Tove Ek
 * @version 1.0.0
 */

export const classObject = {
    barbarian: {
        primaryAbility: 'strength',
        description: 'A fierce warrior of primitive background who can enter a battle rage'
    },
    bard: {
        primaryAbility: 'charisma',
        description: 'An inspiring magician whose power derives from music and poetry.'
    },
    cleric: {
        primaryAbility: 'wisdom',
        description: 'A priestly champion who wields divine magic in service of a higher power.'
    },
    druid: {
        primaryAbility: 'wisdom',
        description: 'A spellcaster who draws on the power of nature.'
    },
    fighter: {
        primaryAbility: 'strength' || 'dexterity',
        description: 'A master of martial combat, skilled with a variety of weapons and armor.'
    },
    monk: {
        primaryAbility: 'dexterity' && 'wisdom',
        description: 'A master of martial arts, capable of harnessing the power of the body and mind.'
    },
    paladin: {
        primaryAbility: 'strength' && 'charisma',
        description: 'A holy warrior bound to a sacred oath.'
    },
    ranger: {
        primaryAbility: 'dexterity' && 'wisdom',
        description: 'A skilled tracker and hunter, adept at surviving in the wilderness.'
    },
    rogue: {
        primaryAbility: 'dexterity',
        description: 'A stealthy and agile character, skilled in deception and thievery.'
    },
    sorcerer: {
        primaryAbility: 'charisma',
        description: 'A spellcaster who draws on inherent magic from their bloodline.'
    },
    warlock: {
        primaryAbility: 'charisma',
        description: 'A spellcaster who makes pacts with otherworldly beings to gain power.'
    },
    wizard: {
        primaryAbility: 'intelligence',
        description: 'A scholarly magic-user capable of manipulating the structures of reality.'
    }
}

// används för att visa information om klasser i class view
// och för att kunna jämföra vilka species som passar till vilka klasser (bara för spelarens skull i denna version av appen)
// spelaren behöver inte välja klass baserat på species
// bara en kul grej