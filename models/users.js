const db = require('../config/database');
const Sequelize = require('sequelize');

const Actors = db.define('users',{
    id:{
        primaryKey: true,
        type:Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    name:{
        type:Sequelize.STRING,
    },
    address:{
        type:Sequelize.STRING,
    },
    email:{
        type:Sequelize.STRING,
    }
},{
    timestamps: false
})

module.exports = Actors;