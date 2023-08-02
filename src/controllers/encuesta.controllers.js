const encuesta = require("../models/encuesta");

const encuestacontroller = {};

encuestacontroller.guardarencuesta = async (req,res) => {
    try{
        const{nombre,identificacion,carrera_universitaria,semestre,materia,salon} = req.body;
        console.log(nombre);

        //crear nueva instancia de la encuesta
        const nuevaencuesta = new encuesta({
            nombre,
            identificacion,
            carrera_universitaria,
            semestre,
            materia,
            salon
        });
        //guardar encuesta en la base de datos
        await nuevaencuesta.save();
        res.redirect("/home");

        //ReturnDocument.redirect("/home");

    } catch (error){
        console.log(error);
        res.status(500).send("ocurrio un error al guardar la encuesta.");
    }
};

module.exports = encuestacontroller;