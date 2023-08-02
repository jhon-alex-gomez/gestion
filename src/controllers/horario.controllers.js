const horario = require("../models/horario");

const horarioController = {};

horarioController.guardarHorario = async (req, res) => {
    try{
        const {hora,dia}= req.body;
        const nuevoHor = new Horario({
            hora,
            dia
        });

        await nuevoHorario.save();

        res.redirect("/horaio");
    }catch(error){
        console.log(error);
        res.status(500).send("ocurrio un error al guardar el horario.");
    }
};
module.exports = horarioController;