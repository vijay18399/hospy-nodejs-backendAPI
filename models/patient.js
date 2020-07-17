var mongoose = require('mongoose');
var PatientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    uhid:{
        type: String,
        required: true,
   
    },
    bed_no: {
        type: String,
        required: true,

    },
    history: {
        type: Array
    },
    assessment: {
        type: Array
    },
    recommendations: {
        type: Array
    },
    Logs: {
        type: Array
    },
    past_status:{
        type:Array
    },
    current_status: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    system_status:{
        type: String
    },
    createdAt: Date,
    LastUpdatedAt: Date,
    UpdatedBy: Object,
    Shifts:Array,
    isDischarged: { type: Boolean, default: false }

});


module.exports = mongoose.model('Patient', PatientSchema);