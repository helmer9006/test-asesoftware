const express = require("express");
const cors = require("cors");
const usersRoutes = require("./routes/turnos.js");

const app = express();

//allow reader the values of a body
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));

//allow cors
app.use(cors());

// routes
app.use("/public", express.static(`./public`));
app.use("/api/turnos", usersRoutes);

module.exports = app;
