// const auth = require('../middlewere/auth');
const express = require('express');
const returnController = require('../controller/returns')
const router = express.Router();

router.post('/' ,returnController.createreturns);

module.exports = router;