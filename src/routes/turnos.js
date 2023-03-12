const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
  crearTurnos,
  traerTurno,
} = require("../controllers/turnosController.js");
const { validarFecha } = require("../utils/general.js");

//crear turnos
/**
 * @swagger
 * components:
 *  schemas:
 *    Turnos:
 *      type: object
 *      properties:
 *        fecha_inicio:
 *          type: date
 *          description: fecha inicial para crear turnos
 *        fecha_fin:
 *          type: date
 *          description: fecha final para crear turnos
 *        id_servicio:
 *          type: integer
 *          description: id del servicio para crear turnos
 *      required:
 *        - fecha_inicio
 *        - fecha_fin
 *        - id_servicio
 *      example:
 *        fecha_inicio: '10/03/2023'
 *        fecha_fin: '11/03/2023'
 *        id_servicio: 2
  *    TurnosResponseGet:
 *      type: object
 *      properties:
 *        fecha_inicio:
 *          type: date
 *          description: fecha inicial para crear turnos
 *        fecha_fin:
 *          type: date
 *          description: fecha final para crear turnos
 *        id_servicio:
 *          type: integer
 *          description: id del servicio para crear turnos
 *      required:
 *        - fecha_inicio
 *        - fecha_fin
 *        - id_servicio
 *      example:
 *        id_turno: 1
 *        id_servicio: 2
 *        estado: 1
 *        fecha_turno: '10/03/2023'
 *        hora_inicio: '06:00'
 *        hora_fin: '07:30'
 */

/**
 * @swagger
 * /api/turnos/crear:
 *  post:
 *    summary: crea turnos
 *    tags: [Turnos]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Turnos'
 *    responses:
 *      200:
 *        description: Turnos creados correctamente.
  *      400:
 *        description: Error creando turnos, parametros de entrada incorrectos.
 *      500:
 *        description: Error creando turnos.
 *
 */
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

/**
 * @swagger
 * /api/turnos/all:
 *  get:
 *    summary: Devuelve todos los turnos
 *    tags: [Turnos]
 *    responses:
 *      200:
 *        description: Turnos encontrados.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/TurnosResponseGet'
 *      404:
 *        description: No se encontraron turnos.
 *      500:
 *        description: Error al consultar los turnos.
 *
 */
router.get("/all", traerTurno);
module.exports = router;
