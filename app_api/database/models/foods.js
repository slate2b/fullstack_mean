const mongoose = require('mongoose');

// Define the food shema
const foodSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    secondary_name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
});
//mongoose.model('foods', foodSchema);
module.exports = mongoose.model("foods", foodSchema);