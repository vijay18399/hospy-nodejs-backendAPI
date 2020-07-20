var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var LogSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    profession: {
        type: String,
        required: true,
    },
    patient_id: {
        type: String,
        required: true,
    },
    uhid: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    time: Date

});


module.exports = mongoose.model('Log', LogSchema);