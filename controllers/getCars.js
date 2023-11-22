const { CarsModel } = require("../database/models");
const { mapCarOutput } = require("../services");

async function getCars(req, res, next) {
  const { page, limit } = req.query;

  const totalCars = await CarsModel.countDocuments();

  const cars = await CarsModel.find({}, null, {
    skip: (page - 1) * limit,
    limit,
  });

  const mappedCar = cars.map(mapCarOutput);
  res.json({ data: mappedCar, totalCars });
}

module.exports = {
  getCars,
};
