const express = require('express');
const app = express();
const studentRoute = require('./Routes/Studentroutes');
require("dotenv").config();
require("./model/dbconnect");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/student ", studentRoute);


app.listen(process.env.port || 4000, function () {
    console.log('Now listening for requests on : https://localhost:4000');
});

