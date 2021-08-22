'use strict';

const POSTGRES_URI =process.env.POSTGRES_URI || "postgres://postgres:0000@localhost:5432/postgres";
const { Sequelize, DataTypes } = require('sequelize');
const food = require('./usermodel');
const clothes = require('./clothes.model')
var Sql= new Sequelize(POSTGRES_URI, {});


module.exports={

db:Sql,
food:food(Sql,DataTypes),
clothes:clothes(Sql,DataTypes),

}