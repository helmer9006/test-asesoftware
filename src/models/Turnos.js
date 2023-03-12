const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../database/database.js");

exports.Turnos = sequelize.define(
  "Turnos",
  {
    id_turno: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_servicio: {
      type: DataTypes.INTEGER,
      primaryKey: false,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_turno: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    hora_inicio: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    hora_fin: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
