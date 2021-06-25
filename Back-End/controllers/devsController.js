const { Devs } = require('../models');

const addDev = async (req, res) => {
  const { name, landLine, mobileLine, address, zipCode, allLanguages } = req.body;
  const { state, city, district, street } = address;
  console.log(req.body);
  const dev = await Devs.create({
    name,
    landLine,
    mobileLine,
    street,
    district,
    city,
    state,
    zipCode
  });

  return res.status(200).json(dev)
}

const getDevs = async (req, res) => {
  const allDevs = await Devs.findAll();
  return res.status(200).json(allDevs);
};

module.exports = { addDev, getDevs };
