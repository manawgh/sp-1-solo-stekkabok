// ------- HELPER FUNCTIONS -------

import { DateTime } from 'luxon'

// turn a date into an ordinal
function toOrdinal (date) {
  const dateArgs = date.split('-').map(str => parseInt(str)); // turns date as returned by form ('2025-02-04') into array of integers, that can be spread into a series of arguments for the DateTime constructor
  return DateTime.local(...dateArgs).ordinal; // turns array of date components into an ordinal
}

// retrieve all rooms
async function getAllRooms () {
  try {
    const response = await fetch('http://localhost:3000/rooms',
      {method: 'GET', headers: {"Content-Type": "application/json"}});
    if (!response.ok) throw new Error ('error retrieving room list.');
    const rooms = await response.json();
    return rooms;
  }
  catch (err) {
    console.log(err)
  }
}

// retrieve available rooms
async function getAvailableRooms (request) {
  try {
    const response = await fetch('http://localhost:3000/rooms',
      {method: 'POST', body: JSON.stringify(request), headers: {"Content-Type": "application/json"}});
    if (!response.ok) throw new Error ('error retrieving room list.');
    const rooms = await response.json();
    return rooms;
  }
  catch (err) {
    console.log(err)
  }
}

// send stripe checkout request
async function requestCheckout (roomData) {
  try {
    const response = await fetch('http://localhost:3000/create-checkout-session',
      {method: 'POST', body: JSON.stringify(roomData), headers: {"Content-Type": "application/json"}});
    if (!response.ok) throw new Error ('error sending checkout request.');
    else {
      const { clientSecret } = await response.json();
      return clientSecret;
    }
  }
  catch (err) {
    console.log(err)
  }
}

export { toOrdinal, getAllRooms, getAvailableRooms, requestCheckout };