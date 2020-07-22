//get the sequelize config file.
//contains the import and the functions required
const { Sequelize, sequelize } = require("../../sequelize_config");

const Role = sequelize.define("role", {
    //attributes
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = Role;