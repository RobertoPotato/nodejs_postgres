//get the sequelize config file.
//contains the import and the functions required
const { Sequelize, sequelize } = require("../../sequelize_config");

const Tier = sequelize.define("tier", {
    //attributes
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    badgeUrl: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Tier;