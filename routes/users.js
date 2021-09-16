const auth = require('../middlewere/auth');
const userController = require('../controller/users')
const express = require('express');
const router = express.Router();

router.get('/me',auth , userController.getallusers)
router.post('/', userController.createuser);

module.exports = router;