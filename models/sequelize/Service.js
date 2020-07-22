//get the sequelize config file.
//contains the import and the functions required
const { Sequelize, sequelize } = require("../../sequelize_config");

const Service = sequelize.define("service", {
    //attributes
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    budget: {
        type: Sequelize.STRING,
        allowNull: false
    },
    terms: {
        type: Sequelize.STRING,
        allowNull: false
    },
    //FOREIGN KEYS NEEDED
    //categoryId
    //userId
    //statusId
    //addressId
});

module.exports = Service;