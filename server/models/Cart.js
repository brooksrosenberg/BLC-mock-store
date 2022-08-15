const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Cart extends Model { }

Cart.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        product_id: {
            type: DataTypes.STRING
        },
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: "user",
        //         key: 'id'
        //     }
        // },
        // post_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: "post",
        //         key: 'id'
        //     }
        // }
    },
    {
        sequelize,
        // underscored: true,
        // modelName: 'comment',
        // freezeTableName: true,
    }
)

module.exports = Cart;