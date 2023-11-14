const { createCarSchema } = require("../schemas");
const { CarsModel } = require("../database/models");
const { mapCarOutput, createExcrptionHTTP } = require("../services");

async function createCar(req, res, next) {
  const { brand, model, color, year } = req.body;

  const { error } = createCarSchema.validate({
    brand,
    model,
    color,
    year,
  });
  if (error) {
    throw createExcrptionHTTP(400, error.message);
  }

  const newCar = await CarsModel.create({
    brand,
    model,
    color,
    year,
  });

  const mappedCar = mapCarOutput(newCar);
  res.status(201).json(mappedCar);
}

module.exports = {
  createCar,
};
