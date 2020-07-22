const { sequelize, Sequelize } = require("../../sequelize_config");
const User = require("./User");
const Service = require("./Service");
const Address = require("./Address");
const Category = require("./Category");
const Bid = require("./Bid");
const Profile = require("./Profile");
const Role = require("./Role");
const Review = require("./Review");
const Status = require("./Status");
const Tier = require("./Tier");

//RELATIONSHIPS BETWEEN TABLES
//user - profile
User.hasOne(Profile);
Profile.belongsTo(User);

//user - role
User.hasOne(Role);
Role.belongsTo(User);

//user - address
User.hasOne(Address);
Address.belongsTo(User);

//user - reviews
User.hasMany(Review);
Review.belongsTo(User);

//user - service
User.hasMany(Service);
Service.belongsTo(User);

//User - tier
Tier.hasMany(User);
User.belongsTo(Tier);

//user - bid
User.hasOne(Bid);
Bid.belongsTo(User);


//service - category
Category.hasMany(Service);
Service.belongsTo(Category);

//service - bid
Service.hasMany(Bid);
Bid.belongsTo(Service);


//Service - status
Service.hasOne(Status);
Status.belongsTo(Service);

//Sync everything to the database
sequelize.sync({ force: true });
