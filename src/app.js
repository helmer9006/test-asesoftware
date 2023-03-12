const express = require("express");
const cors = require("cors");
const path = require("path");
const usersRoutes = require("./routes/turnos.js");
const { Constants } = require("./constants/constants");
//swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const app = express();

//allow reader the values of a body
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));

//allow cors
app.use(cors());

// routes
app.use("/public", express.static(`./public`));
app.use("/api/turnos", usersRoutes);
app.use(
  "/api/doc",
  swaggerUI.serve,
  swaggerUI.setup(
    swaggerJsDoc({
      definition: {
        openapi: "3.0.0",
        info: {
          title: "Test-Asesoftware",
          version: "1.0.0",
        },
        servers: [
          {
            url: `http://${process.env.APP_HOST}:${process.env.APP_PORT}`,
            description: "Servidor local",
          },
        ],
      },
      apis: [`${path.join(__dirname, "./routes/*.js")}`],
    })
  )
);
console.log(Constants.CONFIG_SWAGGER);
module.exports = app;
