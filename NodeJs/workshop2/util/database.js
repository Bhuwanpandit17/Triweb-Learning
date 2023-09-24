const Sequelize = require('sequelize');
const sequelize = new Sequelize("User_Data","root","",{
    dialect:"mysql",
    host:"localhost"
});


module.exports = sequelize;    