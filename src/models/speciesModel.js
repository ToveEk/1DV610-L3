/**
 * Species model representing character species and their attribute bonuses.
 * 
 * @module models/speciesModel
 * @author Tove Ek
 * @version 1.0.0
 */

export const speciesObject = {
    dragonborn: {
        strength: 2,
        charisma: 1,
        description: 'Dragonborn are proud, strong, and honorable warriors with draconic ancestry.'
    },
    dwarf: {
        constitution: 2,
        wisdom: 1,
        description: 'Dwarves are sturdy and resilient, known for their craftsmanship and combat skills.'
    },
    elf: {
        dexterity: 2,
        wisdom: 1,
        description: 'Elves are agile and graceful, with keen senses and a deep connection to nature.'
    },
    gnome: {
        intelligence: 2,
        constitution: 1,
        description: 'Gnomes are small and clever, known for their inventiveness and affinity for magic.'
    },
    halfling: {
        dexterity: 2,
        charisma: 1,
        description: 'Halflings are small and nimble, known for their stealth and luck.'
    },
    human: {
        strength: 1,
        dexterity: 1,
        constitution: 1,
        intelligence: 1,
        wisdom: 1,
        charisma: 1,
        description: 'Humans are the most adaptable and ambitious people among the common races.'
    },
    orc: {
        strength: 2,
        constitution: 1,
        description: 'Orcs are strong and aggressive, known for their ferocity in battle.'
    },
    tiefling: {
        charisma: 2,
        intelligence: 1,
        description: 'Tieflings are known for their infernal heritage, which grants them a natural affinity for magic and a charismatic presence.'
    }
}

// används för att visa information om raser i species view
// används också för att lägga se vilka bonusar en ras ger 
// dessa används sedan vid rullning av tärningar för att bestämma attributpoäng (modifiers)
