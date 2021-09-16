const rentalController = require('../controller/rentals')
const express = require('express');
const router = express.Router();

// Fawn.init(mongoose)

router.get('/', rentalController.getallrentals);

router.post('/', rentalController.createrental);

router.get('/:id', rentalController.getonerental);

module.exports = router;