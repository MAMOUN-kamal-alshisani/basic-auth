const foodModel = (sequelize,DataType)=>sequelize.define('food',{
username:{

type:DataType.STRING,
allowNull: false,
},
password:{
type:DataType.STRING,
allowNull: false,
},
}); 

module.exports =foodModel;