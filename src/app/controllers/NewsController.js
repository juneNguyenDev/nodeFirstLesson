class NewsController {
    index(req, res) {
        res.render('news');
    }
    //Get slug :

    show(req, res) {
        res.send('Detail News');
    }
}
module.exports = new NewsController();
