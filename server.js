const express = require('express');
const mongojs = require('mongojs');
const logger = require('morgan');
const path = require('path');
const htmlRoutes = require("./routes/htmlRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(htmlRoutes);

const databaseUrl = "notetaker";
const collections = ["notes"];

const db = mongojs(databaseUrl, collections);


  app.listen(3000, () => {
    console.log("App running on port 3000!");
  });

  module.exports = app;
