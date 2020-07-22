//get the sequelize config file.
//contains the import and the functions required
const { Sequelize, sequelize } = require("../../sequelize_config");

const Bid = sequelize.define("bid", {
    //attributes
    bidAmount: {
        type: Sequelize.STRING,
        allowNull: false
    },
    coverLetter: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    canTravel: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    availability: {
        type: Sequelize.STRING,
        allowNull: false
    },
    currency: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Bid;