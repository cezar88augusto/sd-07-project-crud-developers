const URL = 'http://localhost:3001';

const ENDPOINT = {
  getDevs: '/select',
  setDev: '/insert',
  deleteDev: '/delete',
  updateDev: '/update',
  getByName: '/getByName'
};

export async function setDev(name, landLine, mobileLine, address, zipCode, allLanguages) {
  const data = {
    name,
    landLine,
    mobileLine,
    address,
    zipCode,
    allLanguages,
  };
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const request = await fetch(URL + ENDPOINT.setDev, requestOptions);
  const response = request.json();
  return response;
}

export async function getDevs() {
  const request = await fetch(URL + ENDPOINT.getDevs);
  const response = request.json();
  return response;
}

export async function deleteDev(name) {
  const data = {
    name,
  };
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  const request = await fetch(URL + ENDPOINT.deleteDev, requestOptions);
  const response = request.json();
  return response;
}

export async function getDevByName(name) {
  const data = {
    name,
  };
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  const request = await fetch(URL + ENDPOINT.getByName, requestOptions);
  const response = request.json();
  return response;
}

export async function updateDevByName(previousName, name, landLine, mobileLine, address, zipCode) {
  const data = {
    previousName,
    name, 
    landLine, 
    mobileLine, 
    address, 
    zipCode,
  };

  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const request = await fetch(URL + ENDPOINT.updateDev, requestOptions);
  const response = request.json();
  return response;
}
