const {Schema, model} = require ("mongoose");

const bcrypt = require("bcryptjs");

const matriculaSchema = new Schema({

carrera_universitaria: {type: stringToLines, require: true},
semestre: {type: Number, require: true},
materia: {type: stringToLines, require: true}

});

module.exports = model ("matricula",matriculaSchema);