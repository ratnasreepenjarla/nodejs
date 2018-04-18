var mongoose = require('mongoose');

var ClassesSchema = new mongoose.Schema({
    name: { type: string, required: true },
    createdAt: Date.now,
    updatedAt: { type: Date, default: Date.now }

});

module.exports = mongoose.model('classes',GradesSchema)