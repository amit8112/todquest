const express = require("express");

const router = new express.Router();

const Student = require("../controllers/staffController");
const Right = require("../controllers/rightController");

router.post("/staff/create", Student.create);
router.post("/right/create", Right.create);
router.post("/right/popilate", Right.staffByRight);

module.exports = router;
