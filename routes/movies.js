const movieController = require('../controller/movies')
const express = require('express');
const router = express.Router();

router.get('/', movieController.getallmovies);

router.post('/', movieController.createmovie);

router.put('/:id', movieController.updatemovie);

router.delete('/:id', movieController.deletemovie);

router.get('/:id', movieController.getonemovie);

module.exports = router; 