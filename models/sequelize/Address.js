//get the sequelize config file.
//contains the import and the functions required
const { Sequelize, sequelize } = require("../../sequelize_config");

const Address = sequelize.define("address", {
    //attributes
    county: {
        type: Sequelize.STRING,
        allowNull: false
    },
    town: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lat: Sequelize.DOUBLE,
    long: Sequelize.DOUBLE,
});

module.exports = Address;