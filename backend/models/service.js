const { mongoose, Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const serviceSchema = Schema({
    category: String
});

const citySchema = Schema({
    city: String
});
const taskSchema = Schema({
    city: String,
    category: String,
    fullName: String,
    contact: String,
    email: {
        type: String,
        createIndexes: { unique: true }
    },
    address: String,
    date: Date,
    time: String
});
const agentSchema = Schema({
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

const assignSchema = Schema({
    taskID: Schema.Types.ObjectId,
    agentID: Schema.Types.ObjectId,
    status: {
        type: String,
        enum: ['pending', 'inprogress', 'completed'],
        default: 'pending'
    }
});


function userPreHook(next) {
    const user = this;
    encryptPassword(user, next);
}

function encryptPassword(user, next) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function (err, data) {
            if (err) return next(err);
            user.password = data;
            next();
        });
    });
}
agentSchema.pre('save', userPreHook);

agentSchema.static('checkPassword', function (password, hash, cb) {
    bcrypt.compare(password, hash, cb);
});

const service = model('service', serviceSchema);
const city = model('city', citySchema);
const task = model('task', taskSchema);
const agent = model('agent', agentSchema);
const assignments = model('assignments', assignSchema);
module.exports = { service, city, task, agent, assignments };
// module.exports=city;

