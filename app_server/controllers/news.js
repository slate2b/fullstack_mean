/* GET news view */
const news = (req, res) => {
    res.render('news', {title: 'Full Stack MEAN - News'});
};

module.exports = {
    news
};