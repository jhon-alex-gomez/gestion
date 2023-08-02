const express = require("express");
const router = express.Router();

const {guardarencuesta} = require ('../controllers/encuesta.controllers') ;

router.post("/guardarencuesta", guardarencuesta );

module.exports = router;