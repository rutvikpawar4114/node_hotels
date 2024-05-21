const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name : {
        type: String
     
    },
    age : {
        type: Number
    },
    work: {
        type: String,
        
     
    },
    mobile : {
        type: Number
       
    },
    email :{
        type: String,
        
    },
    address:{
        type: String
        
    },
    salary : {
        type: Number
       
    }
});

// Create Person Model

const Person = mongoose.model('Person', personSchema);

module.exports = Person;