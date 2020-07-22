const express = require('express');
const app = express();
const {Sequelize, sequelize} = require("./sequelize_config");
const dbsync = require("./models/sequelize/db_sync");

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello world");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});