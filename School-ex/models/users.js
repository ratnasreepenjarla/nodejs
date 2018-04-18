var mongoose = require('mongoose');
var addressschema = new mongoose.Schema({
    doornum: String,
    street: String,
    pincode: { type: Number, required: true },
    district: String,
    state: String
});
var UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phonenumber: { type: String, required: true },
    role: { type: String, enum: ["Admin", "Teacher", "Operator","ClassTeacher"] },
    subject :{type: String},
    address: [addressschema],
    createdAt: Date,
    updatedAt: { type: Date, default: Date }

});
module.exports = mongoose.model('users',UserSchema)