const mongoose = require('mongoose');
const patientSchema = mongoose.Schema(
    {
        surname: {
            type: String,
            required: true,
        },
        othername: {
            type: String,
            required: true,
        },
        contact: {
            type: Number,
            requiredd: true,
        },
        Gender: {
            type: String,
            required: true,
        },
        Emergencyname: {
            type: String,
            required: true,
        },
        Residentialaddress:{
            type: String,
            require: true,
        },
        RelationshipWithPatient:{
            type: String,
            required: true,
        },
        
        EmergencyContactPhone:{   
            type: Number,
            required: true,
        },

    }
)

const Patient= mongoose.model('Patient', patientSchemaatientSchema)
module.exports= Patient;