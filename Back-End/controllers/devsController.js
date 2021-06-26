const { Devs, DevsLanguages } = require('../models');

const addDev = async (req, res) => {
  const { name, landLine, mobileLine, address, zipCode, allLanguages } = req.body;
  const { state, city, district, street } = address;

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
  
  await setDevsLanguages(allLanguages);
  return res.status(200).json(dev);
};

const setDevsLanguages = async (allLanguages) => {
  const lastPosition = await Devs.findAll();
  const dev_id = lastPosition.length;
  allLanguages.forEach(async (language_id) => {
    await DevsLanguages.create({
      devId: dev_id,
      languageId: language_id,
    })
  });
};

const getDevs = async (req, res) => {
  const allDevs = await Devs.findAll();
  return res.status(200).json(allDevs);
};

module.exports = { addDev, getDevs };
