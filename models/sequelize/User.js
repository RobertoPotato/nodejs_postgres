//get the sequelize config file.
//contains the import and the functions required
const { Sequelize, sequelize } = require("../../sequelize_config");

const User = sequelize.define("user", {
    //attributes
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rememberToken:  Sequelize.STRING,
    apiToken: Sequelize.STRING,
});

module.exports = User;