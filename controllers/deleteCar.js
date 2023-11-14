const { CarsModel } = require("../database/models");
const { createExcrptionHTTP } = require("../services");

async function deleteCar(req, res, next) {
  const { id } = req.params;
  const result = await CarsModel.findByIdAndDelete(id).catch((error) => {
    throw createExcrptionHTTP(400, error.message);
  });

  if (!result) {
    throw createExcrptionHTTP(404, "This car is not found");
  }

  res.status(200).json({ message: "Car deleted" });
}

module.exports = {
  deleteCar,
};
