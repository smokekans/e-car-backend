const Joi = require("joi");

const createCarSchema = Joi.object({
  brand: Joi.string().required(),
  model: Joi.string().required(),
  color: Joi.string().required(),
  year: Joi.number().required(),
});

module.exports = {
  createCarSchema,
};
