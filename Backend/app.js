const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
const routes = require('./Routers/index.js');
const host = 'localhost';
const port = process.env.PORT || 9001;
const uri = 'mongodb+srv://akashprinceakash9986:startup24@cluster0.kq0um.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const app = express();
app.use(express.json());
app.use(bodyParser.json());
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type', 'Authorization');
    next();
})
app.use(cors());
app.use('/', routes);
mongoose.connect(uri)
    .then(() => {
        app.listen(process.env.port || 9001, host, () => {
            console.log(`Server is running at ${host}:${port}`);
        })
    }).catch((err) => {

    });