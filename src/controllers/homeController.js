/**
 * HomeController handles requests to the home page.
 *
 * @module controllers/homeController
 * @author Tove Ek
 * @version 1.0.0
 */

/**
 * The HomeController class.
 */
export class HomeController {
  /**
   * Renders the home page.
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  renderHomePage (req, res) {
    res.render('home/home')
  }
}
