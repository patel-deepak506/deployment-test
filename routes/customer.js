const customerController = require('../controller/customer')
const express = require("express");
const router = express.Router();

router.get("/", customerController.getallcustomers);
router.post("/", customerController.createcustomer);
router.put("/:id", customerController.updatecustomer);
router.delete("/:id", customerController.deletecustomer);
router.get("/:id", customerController.getonecustomer);
module.exports = router;