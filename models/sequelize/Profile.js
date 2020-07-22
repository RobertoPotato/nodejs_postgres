//get the sequelize config file.
//contains the import and the functions required
const { Sequelize, sequelize } = require("../../sequelize_config");

const Profile = sequelize.define("profile", {
    //attributes
    bio: {
        type: Sequelize.STRING,
        allowNull: false
    },
    profilePicture: {
        type: Sequelize.STRING,
        allowNull: false
    },
    avatar: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isVerified: {
        type: Sequelize.BOOLEAN,
        allowNull: false
        //make default false
    },
    address: {
        type: Sequelize.STRING
    }
    //user_id
    //tier_id
});

module.exports = Profile;