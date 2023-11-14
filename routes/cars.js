const express = require("express");
const carsController = require("../controllers");

const router = express.Router();

router.get("/", carsController.getCars);

router.get("/:id", carsController.getCar);

router.post("/", carsController.createCar);

router.put("/:id", carsController.updateCar);

router.delete("/:id", carsController.deleteCar);

module.exports = router;
