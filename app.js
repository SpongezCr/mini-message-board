const express = require('express');
const path = require('node:path');

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

const {indexRouter, newMessageRouter} = require('./routes/routers');


app.use('/new', newMessageRouter);
app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Now running on port " + PORT));