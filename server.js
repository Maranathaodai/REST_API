const express= require('express');
const Mongoose= require("mongoose");
const Patient= require("./models/patientsmodel");
const app = express();
app.use(express.json())

app.post("/Patients", async(req,res) =>{
    try {
        const patient = await Patient.create(req.body);
        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})
app.get('/patient',async(req,res) =>{
    try {
        const Patients= await Patient.find({})
        res.status(200).json(patients)
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})


Mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log("Successfully connected to MongoDb")
    app.listen(3000,()=>{
        console.log("Server running on port 3000")
    })
})