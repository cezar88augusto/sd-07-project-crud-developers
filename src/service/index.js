const CEP_LA_API = 'http://cep.la';
const headers = {
  Accept: 'application/json',
};

const isCepValid = (cep) => {
    const regex = /^\d{5}-\d{3}$/;
    return regex.test(cep)
};

const findCEPinAPI = async (cep) => {
  if (!isCepValid(cep)) return false;
  const response = await fetch(`${CEP_LA_API}/${cep}`, { headers });
  const cepData = await response.json();
  return cepData;
};

module.exports = { findCEPinAPI };
