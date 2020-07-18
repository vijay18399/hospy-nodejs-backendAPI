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
    bedno: {
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
    currentstatus: {
        type: String,
        required: true
    },
    systemstatus:{
        type: String
    },
    createdAt: Date,
    lastUpdatedAt: Date,
    updatedBy: Object,
    Shifts:Array,
    isDischarged: { type: Boolean, default: false }

});


module.exports = mongoose.model('Patient', PatientSchema);