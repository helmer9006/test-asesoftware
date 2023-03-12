const dotenv = require("dotenv").config();
const path = require("path");
exports.Constants = {
  TYPE_USER: {
    HOSPITAL: "hospital",
    PATIENT: "patient",
    DOCTOR: "doctor",
  },
  APP_PORT: process.env.APP_PORT || 4000,
  APP_HOST: process.env.APP_HOST || "localhost",
  SECRET: process.env.SECRET,
  URL_SERVER: `${process.env.APP_HOST}:${process.env.APP_PORT}`,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_HOST: process.env.DB_HOST,
  DB_DIALECT: process.env.DB_DIALECT,
  DB_PORT: process.env.DB_PORT,
};
