var mongoose = require('mongoose');

var addressschema = new mongoose.Schema({
    doornum: string,
    street: string,
    pincode: { type: number, required: true },
    district: string,
    state: string
});
var StudentsSchema = new mongoose.Schema({
    name: { type: string, required: true },
    Gardianname: { type: string, required: true },
    email: { type: string},
    Gardianphonenumber: { type: string, required: true },
    role: { type: string,default:"Student" },
    address: [addressschema],
    createdAt: Date.now,
    updatedAt: { type: Date, default: Date.now }

});

module.exports = mongoose.model('students',StudentsSchema)