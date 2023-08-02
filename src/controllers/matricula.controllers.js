const matricula = require("../models/matricula");

const matriculaController = {};

matriculaController.guardarMatricula = async (req, res) => {
    try{
        const{carrera_universitaria, semestre, materia}=req.body;
        const nuevoMatri = new Matricula({
            carrera_universitaria,
            semestre,
            materia
        });
        await nuevoMatricula.save();

        res.redirect("/matricula");

    }catch (error){
        console.log(error);
        res.status(500).send("ocurrio un error al guardar la matricula");
    }
};
module.exports = matriculaController;