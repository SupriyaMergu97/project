const mongoose = require('mongoose');
const serviceSchema = new mongoose.Schema({
    category: String
});
const citySchema = new mongoose.Schema({
    place: String
});

const service = mongoose.model(('service', serviceSchema));
const city = mongoose.model(('city', citySchema));
module.exports = { service, city };
// module.exports=city;

