const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Product extends Model {}

Product.init(
    //post title, content
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        img: {
            type: DataTypes.BLOB,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
        },
        bio: {
            type: DataTypes.STRING,  
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
        },
     
    },
    {
        sequelize,
        // underscored: true,
        modelName: 'product',
        // freezeTableName: true,

    }

)

module.exports = Product;