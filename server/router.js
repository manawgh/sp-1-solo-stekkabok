'use strict';

const express = require('express');
const router = express.Router();
const { getAll, getFiltered, checkOut } = require('./control');

router.get('/rooms', getAll);
router.post('/rooms', getFiltered);
router.post('/create-checkout-session', checkOut);

module.exports = router;