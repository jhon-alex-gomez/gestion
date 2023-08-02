const {Schema, model }= require("mongoose");
const bcrypt = require("bcryptjs");

const horarioSchema = new Schema({
    hora:{type: Number, required: true},
    dia:{type: stringToLines, required: true }
});

module.exports = model("horario", horarioSchema);