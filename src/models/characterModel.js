/**
 * Character model representing a dnd character.
 *
 * @module models/characterModel
 * @author Tove Ek
 * @version 1.0.0
 */

export const characterObject = {
  name: '',
  species: '',
  class: '',
  abilityScores: {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0
  }
}

// används för att lagra informationen om den skapade karaktären genom flödet
// sparas inte i databas eller liknande i denna version av appen
// används för att visa sammanfattning av karaktären i summary view
