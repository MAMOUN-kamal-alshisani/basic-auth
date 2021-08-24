// 'use strict';
// require('dotenv').config();
// const POSTGRES_URI =process.env.POSTGRES_URI || "postgres://postgres:0000@localhost:5432/authdb";
// const { Sequelize, DataTypes } = require('sequelize');

// const Users = require('./user');
// const Collection = require('./collection');





// let Sql= new Sequelize(POSTGRES_URI, {});

// const userModel = Users(Sql , DataTypes);

// const UserCollection = new Collection(userModel);
// module.exports={

// db:Sql,
// User : UserCollection

// }

'use strict';
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const Users = require('./user');
const Collection = require('./collection');
const DATABASE_URL =process.env.DATABASE_URL 

const DATABASE_CONFIG={

    dialectOptions:{
        ssl:{
            require:true,
            rejectUnauthorized:false,
        }
    }
}
const Sql =new Sequelize(DATABASE_URL, DATABASE_CONFIG);
// || "postgres://postgres:0000@localhost:5432/authdb";



// let Sql= new Sequelize(POSTGRES_URI, {});

const userModel = Users(Sql , DataTypes);

const UserCollection = new Collection(userModel);
module.exports={

db:Sql,
User : UserCollection

}
