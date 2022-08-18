const { User } = require('../models');

const userData = [
        {
        "username": "BradP",
        "name": "Brad Pitt",
        "email": "bradP@gmail.com",
        "password": "password1231"
        },
        {
        "username": "JuliaR",
        "name": "Julia Roberts",
        "email": "juilaR@gmail.com",
        "password": "password1232"
        },
         {
        "username": "BerineM",
        "name": "Berine Mac",
        "email": "BMac@gmail.com",
        "password": "password1233"
        },
        {
        "username": "Matt",
        "name": "Matt Damon",
        "email": "mattD@gmail.com",
        "password": "password1234"
        },
        {
         "username": "GeorgeC",
        "name": "George Clooney",
         "email": "jackW@gmail.com",
        "password": "password123"
        },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;