class SiteController {

        index(req , res){
            res.render('home')
        }
        //Get slug :
        // Search
        search(req, res){
            res.render("search")
        }
}
module.exports = new SiteController