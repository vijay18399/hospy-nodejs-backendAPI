var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var ShiftSchema = new mongoose.Schema({
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
    notes: {
        type: String
    },
    time: Date

});


module.exports = mongoose.model('Shift', ShiftSchema);