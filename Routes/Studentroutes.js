const express = require('express');

const studentController = require('../Controller/Student controler');
const router = express.Router();

router.put("/addStudent", studentController.addStudent);
router.post("/addStudent", studentController.addStudent);
router.get("/addStudent", studentController.addStudent);
router.delete("/addStudent", studentController.addStudent);


module.exports = router;
  