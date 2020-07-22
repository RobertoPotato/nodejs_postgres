//get the sequelize config file.
//contains the import and the functions required
const { Sequelize, sequelize } = require("../../sequelize_config");

const Job = sequelize.define("job", {
    //attributes
    //serviceId
    //customerId -> user_id
    //clientId -> user_id
    //bidId
    //statusId
});

module.exports = Job;