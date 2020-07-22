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
const Job = require("./Job");

//RELATIONSHIPS BETWEEN TABLES
//user - profile
User.hasOne(Profile);
Profile.belongsTo(User);

//user - address
User.hasOne(Address);
Address.belongsTo(User);

//user - reviews
User.hasMany(Review);
Review.belongsTo(User);

//user - service
User.hasMany(Service);
Service.belongsTo(User);

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
Service.belongsTo(Status);

//profile - tier
Profile.belongsTo(Tier);
Tier.hasMany(Profile);

//profile - role
Profile.belongsTo(Role);
Role.hasMany(Profile);

//job - user
Job.belongsTo(User, { as: "client" });
Job.belongsTo(User, { as: "agent" });

//job - bid
Job.belongsTo(Bid);
Bid.hasMany(Job);

//job - service
Job.belongsTo(Service);
Service.hasMany(Job);

//job - status
Job.belongsTo(Status);

//SYNC EVERYTHING TO THE DATABASE with force tag to drop and recreate every existing table
sequelize.sync({ force: true });
