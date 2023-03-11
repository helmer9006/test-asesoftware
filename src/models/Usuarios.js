// const { DataTypes } = require("sequelize");

// module.exports = model;

// function model(sequelize) {
//   const attributes = {
//     correo: { type: DataTypes.STRING, allowNull: false },
//     clave: { type: DataTypes.STRING, allowNull: false },
//     nombre: { type: DataTypes.STRING, allowNull: false },
//     apellido: { type: DataTypes.STRING, allowNull: false },
//     perfil: { type: DataTypes.STRING, allowNull: false },
//   };

//   const options = {
//     defaultScope: {
//       // exclude password hash by default
//       attributes: { exclude: ["clave"] },
//     },
//     scopes: {
//       // include hash with this scope
//       withHash: { attributes: {} },
//     },
//   };

//   return sequelize.define("Usuarios", attributes, options);
// }

const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database.js");

exports.Usuarios = sequelize.define(
  "Usuarios",
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clave: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    perfil: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
