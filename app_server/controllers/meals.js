var fs = require('fs'); 

var foods = JSON.parse(fs.readFileSync('./data/foods.json', 'utf8'));

/* GET meals view */
const meals = (req, res) => {
    res.render('meals', {title: 'Full Stack MEAN - Meals', foods});
};

module.exports = {
    meals
};