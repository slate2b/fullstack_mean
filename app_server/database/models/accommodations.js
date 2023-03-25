const mongoose = require('mongoose');

// Define the accommodations shema
const accommodationSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    rate: { type: String, required: true }
});
//mongoose.model('accommodations', accommodationSchema);
module.exports = mongoose.model("accommodations", accommodationSchema);