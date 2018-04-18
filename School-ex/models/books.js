var mongoose = require('mongoose');


var BooksSchema = new mongoose.Schema({
    subjectname: { type: string, required: true },
    referingclass: { type: string, required: true },
    numberofbooks : { type: Number, required: true },
    booksavailable : { type: Number, required: true }
    createdAt: Date.now,
    updatedAt: { type: Date, default: Date.now }

});

module.exports = mongoose.model('books',BooksSchema)