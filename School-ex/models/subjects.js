var mongoose = require('mongoose');
var SubjectSchema = new mongoose.Schema({
    subjectnamee: { type: string, required: true },
    ToClass :{type: Array, required: true}
});

module.exports = mongoose.model('subjects',SubjectSchema)