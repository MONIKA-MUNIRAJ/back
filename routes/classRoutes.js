const express = require("express");
const { getAllClasses, createClass } = require("../controllers/classController");

const router = express.Router();

router.get("/", getAllClasses);
router.post("/", createClass);

module.exports = router;
