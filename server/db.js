'use strict';

const db = [
   {
    name: 'Room 1',
    sleeps: 4,
    price: 2900000,
    desc: 'This quadruple room offers single beds and features a shared bathroom, parquet floors and heating.',
    booked: [53,54,55],
    imgPath: 'room_01.jpg'
  },
  {
    name: 'Room 2',
    sleeps: 1,
    price: 725000,
    desc: 'Wonderful medieval little village with lots and lots of character stunning view of the lake',
    booked: [34,35],
    imgPath: 'room_02.jpg'
  },
  {
    name: 'Room 3',
    sleeps: 2,
    price: 1740000,
    desc: 'The father handed each child a roadmap at the beginning of the 2-day road trip and explained it was so they could find their way home.',
    booked: [123,124],
    imgPath: 'room_03.jpg'
  },
  {
    name: 'Room 4',
    sleeps: 2,
    price: 1885000,
    desc: 'By inputting the desired number, you can make a list of as many random sentences as you want or need.',
    booked: [123,124,125,126],
    imgPath: 'room_04.jpg'
  },
  {
    name: 'Room 5',
    sleeps: 3,
    price: 2175000,
    desc: 'Since the topic of the sentence is completely unknown, it forces the writer to be creative when the sentence appears.',
    booked: [12,13],
    imgPath: 'room_05.jpg'
  },
  {
    name: 'Room 6',
    sleeps: 2,
    price: 1450000,
    desc: 'For those writers who have writers block, this can be an excellent way to take a step to crumbling those walls.',
    booked: [],
    imgPath: 'room_06.jpg'
  },
  {
    name: 'Room 7',
    sleeps: 4,
    price: 3915000,
    desc: 'Trying to incorporate the sentence into your project can help you look at it in different and unexpected ways than you would normally on your own.',
    booked: [120,121,122],
    imgPath: 'room_07.jpg'
  },
  {
    name: 'Room 8',
    sleeps: 3,
    price: 2030000,
    desc: 'These are just a few ways that one might use the random sentence generator for their benefit.',
    booked: [123,124,125,126],
    imgPath: 'room_08.jpg'
  },
  {
    name: 'Room 9',
    sleeps: 2,
    price: 1305000,
    desc: 'Please contact us so we can consider adding your ideas to make the random sentence generator the best it can be.',
    booked: [],
    imgPath: 'room_09.jpg'
  },
  {
    name: 'Room 10',
    sleeps: 3,
    price: 2320000,
    desc: 'For example, the sentence "Jack loves candy" is a complete sentence because it has all three elements needed to make a complete sentence.',
    booked: [120,121,122,123],
    imgPath: 'room_10.jpg'
  }
]

module.exports = db;