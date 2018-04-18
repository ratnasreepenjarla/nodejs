var mongoose = require('mongoose');

var ExamtypesSchema = new mongoose.Schema({
    name: { type: string, required: true },
    createdAt: Date.now,
    updatedAt: { type: Date, default: Date.now }

});

module.exports = mongoose.model('examtype',ExamtypesSchema)