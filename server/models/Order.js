const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Order extends Model {}

Order.init(
  
    {
       user_id: {
            type: DataTypes.INTEGER,
            // foreignKey: 'user_id',
            references: {
                model: "user",
                key: 'id'
                },
            allowNull: false,
        },
        cartItems: [{
            product_id: {
                type: DataTypes.INTEGER,
                // foreignKey: 'productId',
                references: {
                     model: "product",
                     key: 'id'
                    },
                unique: true,
                },
             quantity: {
                type: DataTypes.NUMBER,
                defaultValue: 1,
                },
        }],
        amount: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: "pending",
        },
    },
    {
        sequelize,
        underscored: true,
        modelName: 'order',
        freezeTableName: true,

    }

)

module.exports = Order;