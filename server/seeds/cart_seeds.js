const { Cart } = require('../models');
// const flyADHB = require('../images/ADHB.png')

const cartData = [
        {
            user_id: 1,
            cartItems: [
            { product_id: 1,
            title: 'A.D.H.B.',
            description: 'Articulated Deer Hair Bugger',
            img: 'file:///Users/brooksrosenberg/Desktop/ADHB.png',
            category: 'Flies',
            bio: "A new spin on an old classic designed to fish shad kills in the South-East. Tied with schlapen to give a larger profile, mallard flank to add visual depth to the pattern, a rear hook to prevent short strikes and add movement, and a cone shaped deer head to make it swim like a baitfish. This pattern can’t go wrong when fishing over shallow structure with a floating line or run it deep with sinking lines to imitate a large selection of baitfish. Name another articulated deer head streamer thats this easy to cast on a 5wt…. go ahead. We’ll wait…",
            price: 6.50,
            },
        ],
         }, 
    
]

const seedCarts = () => Cart.bulkCreate(cartData);

module.exports = seedCarts;