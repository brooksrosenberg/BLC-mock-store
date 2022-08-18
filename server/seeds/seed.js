// const { Cart, Product, User } = require('../models');
const sequelize = require('../config/connection');

const seedCarts = require('./cart_seeds');
const seedProducts = require('./product_seeds');
const seedUsers = require('./user_seeds');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCarts();
  console.log('\n----- CARTS SEEDED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');



  process.exit(0);
};

seedAll();