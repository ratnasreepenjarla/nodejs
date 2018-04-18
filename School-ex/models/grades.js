var mongoose = require('mongoose');
var GradesSchema = new mongoose.Schema({
    studentId: { type: string, required: true },
    classId: { type: string, required: true },
    totalmarks : { type: Number},
    percentage : { type: Decimal128},
    grade : { type:string, enum:['A','B','C']},
    examinationtype :{type:string, required: true}
    createdAt: Date.now,
    updatedAt: { type: Date, default: Date.now }

});

module.exports = mongoose.model('grades',GradesSchema)