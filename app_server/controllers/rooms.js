var fs = require('fs'); 

var accommodations = JSON.parse(fs.readFileSync('./data/accommodations.json', 'utf8'));

/* GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', {title: 'Full Stack MEAN - Rooms', accommodations});
};

module.exports = {
    rooms
};