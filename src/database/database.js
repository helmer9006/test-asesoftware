const tedious = require("tedious");
const { Sequelize } = require("sequelize");
const { Constants } = require("../constants/constants.js");

exports.sequelize = new Sequelize(
  Constants.DB_DATABASE,
  Constants.DB_USERNAME,
  Constants.DB_PASSWORD,
  {
    host: Constants.DB_HOST,
    dialect: Constants.DB_DIALECT,
    // logging: false
  }
);
