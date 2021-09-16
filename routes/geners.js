const genresController = require('../controller/genres')
const express = require("express");
const router  = express.Router();

router.get('/', genresController.getallgenres);

router.post('/post', genresController.creategenres)

router.put('/update', genresController.updategenres)

router.delete('/delete', genresController.deletegenres)

router.get('/:id', genresController.getonegenre);

module.exports = router;