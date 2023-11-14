const { updateCarSchema } = require("../schemas");
const { CarsModel } = require("../database/models");
const { mapCarOutput, createExcrptionHTTP } = require("../services");

async function updateCar(req, res, next) {
  const { id } = req.params;
  const { brand, model, color, year } = req.body;

  const { error } = updateCarSchema.validate({
    brand,
    model,
    color,
    year,
  });
  if (error) {
    throw createExcrptionHTTP(400, "Missing fields");
  }

  const updateCar = await CarsModel.findByIdAndUpdate(
    id,
    {
      brand,
      model,
      color,
      year,
    },
    { new: true }
  ).catch((error) => {
    throw createExcrptionHTTP(400, error.message);
  });

  if (!updateCar) {
    throw createExcrptionHTTP(404, "This car is not found");
  }

  const mappedCar = mapCarOutput(updateCar);
  res.status(200).json(mappedCar);
}

module.exports = {
  updateCar,
};
