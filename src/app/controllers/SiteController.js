const Course = require('../models/Course')
class SiteController {
    
    index(req, res) {
        // res.render('home');
        Course.find({})
        .then(courses => {res.json(courses)})
        .catch(err => {res.status(400).json({error:"Loi Mat ROi"})})
    };
    //Get slug :
    // Search
    search(req, res) {
        res.render('search');
    }
};
module.exports = new SiteController();
