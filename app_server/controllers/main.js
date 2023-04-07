/* GET home page */
const index = (req, res) => {
    res.render('index', {title: 'Full Stack MEAN by slate2b'});
};

module.exports = {
    index
};