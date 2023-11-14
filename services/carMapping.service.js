const mapCarOutput = (carDocument) => {
  const { _id, ...rest } = carDocument.toObject();

  const mappedCar = {
    id: _id,
    ...rest,
  };

  return mappedCar;
};

module.exports = {
  mapCarOutput,
};
