const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { crearTurnos } = require("../controllers/turnosController.js");
const { validarFecha } = require("../utils/general.js");

router.post(
  "/crear",
  [
    check("id_servicio", "El id del servicio es obligatorio.").isNumeric(),
    check("fecha_inicio", "La fecha de inicio es obligatorio.")
      .not()
      .isEmpty()
      .custom((value, { req }) => {
        if (!value || !validarFecha(value)) {
          console.log("Fecha no valida");
          throw new Error(
            "Error en el formato de la fecha de inicio, el formato correcto es: dd/mm/yyyy"
          );
        } else {
          console.log("Fecha valida");
        }
        return true;
      }),
    check("fecha_fin", "La fecha de fin es obligatorio.")
      .not()
      .isEmpty()
      .custom((value, { req }) => {
        if (!value || !validarFecha(value)) {
          console.log("Fecha no valida");
          throw new Error(
            "Error en el formato de la fecha de fin, el formato correcto es: dd/mm/yyyy"
          );
        } else {
          console.log("Fecha valida");
        }
        return true;
      }),
  ],
  crearTurnos
);

module.exports = router;
