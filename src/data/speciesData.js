/**
 * Species data representing character species and their attribute bonuses.
 *
 * @module data/speciesData
 * @author Tove Ek
 * @version 1.0.0
 */

const dragonborn = {
  name: 'Dragonborn',
  bonuses: {
    strength: 2,
    charisma: 1
  },
  description: 'Dragonborn are proud, strong, and honorable warriors with draconic ancestry.'
}

const dwarf = {
  name: 'Dwarf',
  bonuses: {
    constitution: 2,
    wisdom: 1
  },
  description: 'Dwarves are sturdy and resilient, known for their craftsmanship and combat skills.'
}

const elf = {
  name: 'Elf',
  bonuses: {
    dexterity: 2,
    wisdom: 1
  },
  description: 'Elves are agile and graceful, with keen senses and a deep connection to nature.'
}

const gnome = {
  name: 'Gnome',
  bonuses: {
    intelligence: 2,
    constitution: 1
  },
  description: 'Gnomes are small and clever, known for their inventiveness and affinity for magic.'
}

const halfling = {
  name: 'Halfling',
  bonuses: {
    dexterity: 2,
    charisma: 1
  },
  description: 'Halflings are small and nimble, known for their stealth and luck.'
}

const human = {
  name: 'Human',
  bonuses: {
    strength: 1,
    dexterity: 1,
    constitution: 1,
    intelligence: 1,
    wisdom: 1,
    charisma: 1
  },
  description: 'Humans are the most adaptable and ambitious people among the common races.'
}

const orc = {
  name: 'Orc',
  bonuses: {
    strength: 2,
    constitution: 1
  },
  description: 'Orcs are strong and aggressive, known for their ferocity in battle.'
}

const tiefling = {
  name: 'Tiefling',
  bonuses: {
    charisma: 2,
    intelligence: 1
  },
  description: 'Tieflings are charismatic and cunning, with infernal heritage that grants them unique abilities.'
}

export const speciesList = [dragonborn, dwarf, elf, gnome, halfling, human, orc, tiefling]

// används för att visa information om arter i species view
// också för att applicera artens bonusar på attributpoäng vid rullning av ability scores
// också för att kunna jämföra vilka species som passar till vilka klasser (bara för spelarens skull i denna version av appen)
// spelaren behöver inte välja art baserat på klass
