//get the sequelize config file.
//contains the import and the functions required
const { Sequelize, sequelize } = require("../../sequelize_config");

const Category = sequelize.define("category", {
    //attributes
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Category;