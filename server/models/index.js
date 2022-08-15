const Cart = require('./Cart');
const Product = require('./Product');
const User = require('./User');


Cart.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'
})


Product.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'
})

// Post -> Comment
Cart.hasMany(Product, {
    foreignKey: 'cart_id',
    onDelete: 'CASCADE'
})



module.exports = {User, Product, Cart};