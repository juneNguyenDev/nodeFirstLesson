const Course = require('../models/Course')
const {multipleMongooseToObject} = require('../../until/mongoose')
class SiteController {
    
    index(req, res) {
        // res.render('home');
        Course.find({})
        .then(courses => {
            res.render('home',{
                courses:multipleMongooseToObject(courses)
            })
        })
        .catch(err => {res.status(400).json({error:"Loi Mat ROi"})})
    };
    //Get slug :
    // Search
    search(req, res) {
        res.render('search');
    }
};
module.exports = new SiteController();
