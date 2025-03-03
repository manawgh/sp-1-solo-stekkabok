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
  const { prod_id, price, nights } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      ui_mode: 'embedded',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'isk',
            product: prod_id,
            unit_amount: price,
          },
          quantity: nights,
          /* metadata: {
            daysBooked: days,
          } */
        },
      ],
      return_url: 'http://localhost:5173/bookings',
    });
    res.status(201).json({clientSecret: session.client_secret});
  }
  catch (err) {
    console.log(err);
  }
}

// update room availability
function updateAvail (req, res) {
  const event = req.body;
  console.log(event.type);
  res.status(200).end();
  if (event.type === 'checkout.session.completed') {
    console.log('Checkout session completed!')
  }
}

module.exports = { getAll, getFiltered, checkOut, updateAvail };