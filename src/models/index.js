'use strict';
require('dotenv').config();
const POSTGRES_URI =process.env.POSTGRES_URI || "postgres://postgres:0000@localhost:5432/authdb";
const { Sequelize, DataTypes } = require('sequelize');

const Users = require('./user');
const Collection = require('./collection');





let Sql= new Sequelize(POSTGRES_URI, {});

const userModel = Users(Sql , DataTypes);

const UserCollection = new Collection(userModel);
module.exports={

db:Sql,
User : UserCollection

}