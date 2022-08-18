const Cart = require('./Cart');
const Product = require('./Product');
const User = require('./User');
const Order = require('./Order')


Cart.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'
})
User.hasOne(Cart, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'
})

Order.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'
})
User.hasMany(Order, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'
})

Cart.hasMany(Product, {
    foreignKey: 'product_id',
    onDelete: 'CASCADE'
})

Product.hasMany(Cart, { 
    foreignKey: 'product_id',
    onDelete: 'CASCADE'
})



module.exports = {User, Product, Cart, Order};