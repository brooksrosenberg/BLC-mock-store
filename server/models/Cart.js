const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Cart extends Model { }

Cart.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: 'id'
            },
            allowNull: false,
        },
        cartItems: [{
            product_id:{ 
                type: DataTypes.INTEGER,
                references: {
                    model: "product",
                    key: 'id'},
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
            category: {type: DataTypes.STRING},
            bio: {type: DataTypes.STRING},
            price: { type: DataTypes.DECIMAL(10,2)},
        }],
    },
    {
        sequelize,
        underscored: true,
        modelName: 'cart',
        freezeTableName: true,
    }
)

module.exports = Cart;