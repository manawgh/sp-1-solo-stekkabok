'use strict';

const dotenv = require('dotenv');
dotenv.config();

const db = require('./db');
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

// retrieve all rooms
function getAll (req, res) {
  res.json(db);
}

// filter rooms by number of guests and availability
function getFiltered (req, res) {
  const filteredByGuests = db.filter( room => room.sleeps >= req.body.sleeps);
  const filteredByDates = filteredByGuests.filter( room => {
    for (let i=0; i<room.booked.length; i++) {
      if (req.body.days.includes(room.booked[i])) return false;
    }
    return true;
  })
  res.json(filteredByDates);
}

// create a stripe checkout session
async function checkOut (req, res) {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      ui_mode: 'embedded',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'isk',
            product_data: {
              name: req.body.name,
            },
            unit_amount: req.body.price,
          },
          quantity: 1
        },
      ],
      return_url: 'http://localhost:5173'
    });
    res.status(201).json({clientSecret: session.client_secret});
  }
  catch (err) {
    console.log(err);
  }
}

module.exports = { getAll, getFiltered, checkOut };