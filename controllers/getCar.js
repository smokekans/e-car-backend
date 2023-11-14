const { CarsModel } = require("../database/models");
const { mapCarOutput, createExcrptionHTTP } = require("../services");

async function getCar(req, res, next) {
  const { id } = req.params;
  const cars = await CarsModel.findById(id).catch((error) => {
    throw createExcrptionHTTP(400, error.message);
  });

  if (!cars) {
    throw createExcrptionHTTP(404, "This car is not found");
  }

  const mappedCar = mapCarOutput(cars);
  res.json(mappedCar);
}

module.exports = {
  getCar,
};
