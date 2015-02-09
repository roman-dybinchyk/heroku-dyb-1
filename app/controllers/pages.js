exports.home = function (req, res) {
    res.render('home', {
        title: 'Home page',
        message: 'This is the "home" action of "pages" controller. Hi, Alex!'
    })
};