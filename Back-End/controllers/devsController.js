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
  const alldevs = await Devs.findAll({
    include: [
      { association: 'langs' },
    ],
  });
  return res.status(200).json(alldevs);
};

const getDevByName = async (req, res) => {
  const { name } = req.body;
  const dev = await Devs.findAll({
    where: { name },
    include: [
      { association: 'langs' },
    ],
  });
  return res.status(200).json(dev);
}

const updateByName = async (req, res) => {
  const { previousName, name, landLine, mobileLine, address, zipCode } = req.body;
  const { uf: state, cidade: city, bairro: district, logradouro: street} = address;
  await Devs.update(
    { name, landLine, mobileLine, street, district, city, state, zipCode },
    {
      where: {
        name: previousName
      },
    },
  );
}

const deleteDev = async (req, res) => {

  await Devs.destroy({
    where: {
      name: req.body.name
    }
  })
  return res.status(204).json();
}

module.exports = { addDev, getDevs, deleteDev, updateByName, getDevByName };
