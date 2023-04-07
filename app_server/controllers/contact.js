/* GET contact view */
const contact = (req, res) => {
    res.render('contact', {title: 'Full Stack MEAN - Contact'});
};

module.exports = {
    contact
};