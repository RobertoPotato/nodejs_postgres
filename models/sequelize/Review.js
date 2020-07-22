//get the sequelize config file.
//contains the import and the functions required
const { Sequelize, sequelize } = require("../../sequelize_config");

const Review = sequelize.define("review", {
    //attributes
    stars: {
        type: Sequelize.STRING,
        allowNull: false
    },
    text: {
        type: Sequelize.TEXT,
        allowNull: false
    }
    //customerId -> user_id
    //clientId -> user_id
});

module.exports = Review;