/**
 * HomeController handles requests to the home page.
 * 
 * @module controllers/homeController
 * @author Tove Ek
 * @version 1.0.0
 */

export class HomeController {
    index (req, res) {
        res.render('home/home')
    }
}