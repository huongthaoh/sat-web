const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    username: {
        type: String,
        required: true,
        min: 6,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 8
    }
});

const AdminModel = mongoose.model("Admin", AdminSchema);
module.exports = AdminModel;

