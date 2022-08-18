const { Product } = require('../models');
// const flyADHB = require('../images/ADHB.png')
// const flyAmerNymph = require('../images/amerNymph.png')


const productData = [
    {
        title: 'A.D.H.B.',
        description: 'Articulated Deer Hair Bugger',
        img: 'file:///Users/brooksrosenberg/Desktop/ADHB.png',
        category: 'Flies',
        bio: "A new spin on an old classic designed to fish shad kills in the South-East. Tied with schlapen to give a larger profile, mallard flank to add visual depth to the pattern, a rear hook to prevent short strikes and add movement, and a cone shaped deer head to make it swim like a baitfish. This pattern can’t go wrong when fishing over shallow structure with a floating line or run it deep with sinking lines to imitate a large selection of baitfish. Name another articulated deer head streamer thats this easy to cast on a 5wt…. go ahead. We’ll wait…",
        price: 6.50,
    },
    {
        title: 'American Nymph',
        description: 'A southern take on a classic pattern',
        img: 'file:///Users/brooksrosenberg/Desktop/amerNymph.png',
        category: 'Flies',
        bio: "What’s more American than catching a bunch bream on a slow action rod in the middle of summer while enjoying a cold one with some good friends? Unfortunately Chuck Norris wasn’t available so we have the next best thing. The American Nymph is designed to be a bluegill slaying, sunfish catching machine and as it turns out, it does a pretty good job catching trout and carp. It’s probably one of our most versatile flies so swing them, strip them, or drop them as a nymph pattern and go catch some fish. Tied on a shrimp/scud hook.",
        price: 3.50,
    },
]

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;