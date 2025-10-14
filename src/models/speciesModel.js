/**
 * Species model representing character species and their attribute bonuses.
 *
 * @module models/speciesModel
 * @author Tove Ek
 * @version 1.0.0
 */
export class Species {
  /**
   * Creates a new Species instance.
   *
   * @param {string} name - The name of the species.
   * @param {object} bonuses - The attribute bonuses provided by the species.
   * @param {string} description - A brief description of the species.
   */
  constructor (name, bonuses, description) {
    this.name = name
    this.bonuses = bonuses
    this.description = description
  }
}
