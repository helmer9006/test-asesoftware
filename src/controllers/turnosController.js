const { Constants } = require("../constants/constants.js");
const { validationResult } = require("express-validator");
const { sequelize } = require("./../database/database.js");
const { Usuarios } = require("../models/Usuarios.js");
const moment = require("moment");

exports.crearTurnos = async (req, res) => {
  try {
    console.log("POST - CREAR TURNOS");

    // validate errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errores: errors.array() });
    }
    const { id_servicio, fecha_inicio, fecha_fin } = req.body;

    // validar que la fecha inicio no sea menor a la final
    const formato = "DD/MM/YYY";
    const f_inicio = moment(fecha_inicio, formato);
    const f_fin = moment(fecha_fin, formato);
    if (f_inicio.isAfter(f_fin)) {
      return res.json({
        status: false,
        response: [],
        msg: "La fecha de fin para crear turnos no puede ser menor a la fecha de inicio",
      });
    }
    // hacemos llamado al sp
    const respuesta = await sequelize.query(
      `sp_crear_turnos '${fecha_inicio}', '${fecha_fin}', ${id_servicio}`
    );
    if (respuesta[0][0] && respuesta[0][0].error) {
      return res.json({
        status: false,
        response: [],
        msg: respuesta[0][0].error,
      });
    }
    res.json({
      status: true,
      response: respuesta[0],
      msg: "Turnos creados correctamente.",
    });
  } catch (error) {
    console.log(error);
    console.log(error);
    res
      .status(500)
      .json({ status: false, response: {}, msg: "Error creando turnos" });
  }
};
