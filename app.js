const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const carsRouter = require("./routes/cars");
const { errorHandlingMiddleware } = require("./middlewares");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/cars", carsRouter);

// app.use(errorHandlingMiddleware);

module.exports = app;
