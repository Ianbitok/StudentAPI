const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../config/dbConfig");


const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operaterAliases: false, //will overwrite code if error occurs
});

sequelize
    .authenticate()
    //promise
    .then(() => {
        console.log("Database Connection established");
    })
    .catch((err) => {
        console.log("Error" + err);
    })

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.student = require("./studentModel")(sequelize, DataTypes);

db.sequelize.sync({force: false})
.then(() => {
    console.log("Re sync done");
});

module.exports = db;