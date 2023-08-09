const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: {
        type: String,
    },
    school: {
        type: String,
    },
    score: {
        type: String,
    },
    quote: {
        type: String,
    },
    cover: {
        type: String,
    }
})

const StudentModel = mongoose.model("Student", StudentSchema);
module.exports = StudentModel;
