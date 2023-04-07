/* GET about view */
const about = (req, res) => {
    res.render('about', {title: 'Full Stack MEAN - About'});
};

module.exports = {
    about
};