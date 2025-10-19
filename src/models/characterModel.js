/**
 * Character model representing a DnD character.
 *
 * @module models/characterModel
 * @author Tove Ek
 * @version 1.0.0
 */
export class Character {
  /**
   * Creates a new Character instance.
   *
   * @param {string} name - The name of the character.
   * @param {string} species - The species of the character.
   * @param {string} className - The class of the character.
   * @param {object} abilityScores - The ability scores of the character.
   */
  constructor (name, species, className, abilityScores) {
    this.name = name
    this.species = species
    this.className = className
    this.abilityScores = abilityScores
  }
}
