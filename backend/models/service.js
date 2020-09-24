const mongoose = require('mongoose');
const serviceSchema = new mongoose.Schema({
    category: String
});

const citySchema = new mongoose.Schema({
    city: String
});
const taskSchema = new mongoose.Schema({
    fullName: String,
    contact: String,
    email: {
        type: String,
        index: { unique: true },
        createIndexes: { unique: true }
    },
    address: String,
    date: Date,
    time: String
});
const agentSchema = new mongoose.Schema({
    city: String,
    category: String,
    firstName: String,
    lastName: String,
    contact: String,
    address: String,
    experience: String,
    password: String,
    confirm: String
});
const service = mongoose.model('service', serviceSchema);
const city = mongoose.model('city', citySchema);
const task = mongoose.model('task', taskSchema);
const agent = mongoose.model('agent', agentSchema);
module.exports = { service, city, task, agent };
// module.exports=city;

