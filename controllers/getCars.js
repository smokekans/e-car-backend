const { CarsModel } = require("../database/models");
const { mapCarOutput } = require("../services");

async function getCars(req, res, next) {
  const { page, limit } = req.query;

  const cars = await CarsModel.find({}, null, {
    skip: (page - 1) * limit,
    limit,
  });

  const mappedCar = cars.map(mapCarOutput);
  res.json(mappedCar);
}

module.exports = {
  getCars,
};
