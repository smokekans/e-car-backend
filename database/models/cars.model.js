const mongoose = require("mongoose");

const carsSchema = mongoose.Schema(
  {
    brand: {
      type: String,
      required: [true, "Set brand for car"],
      trim: true,
    },
    model: {
      type: String,
      required: [true, "Set model for car"],
      trim: true,
    },
    color: {
      type: String,
      required: [true, "Set color for car"],
      trim: true,
    },
    year: {
      type: Number,
      required: [true, "Set year for car"],
      trim: true,
    },
  },
  { versionKey: false, timestamps: false }
);

const CarsModel = mongoose.model("cars", carsSchema);

module.exports = {
  CarsModel,
};
