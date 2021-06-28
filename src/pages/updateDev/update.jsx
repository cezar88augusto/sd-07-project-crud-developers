import React, { useEffect, useState } from "react";
import { findCEPinAPI } from "../../services/apiCep";
import { getDevByName, updateDevByName } from "../../services/api";

function InsertDev() {
  const [nameInBD, setSearchName] = useState("");
  const [name, setName] = useState("");
  const [landLine, setLandLine] = useState("");
  const [mobileLine, setMobileLine] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [localizedDeveloper, setLocalizedDeveloper] = useState("");
  const [IsDev, setIsDev] = useState(true);

  useEffect(() => {
    if (
      name !== "" &&
      mobileLine !== "" &&
      address !== undefined &&
      zipCode !== ""
    )
    setIsButtonVisible(false);
    else setIsButtonVisible(true);
  }, [name, mobileLine, address, zipCode, isButtonVisible, localizedDeveloper]);

  useEffect(() => {
    setIsDev(false);
  }, [localizedDeveloper]);

  const handleButton = async target => {
    const { value, name } = target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "landLine":
        setLandLine(value);
        break;
      case "mobileLine":
        setMobileLine(value);
        break;
      case "zipCode":
        setZipCode(value);
        const address = await findCEPinAPI(value);
        if (address) setAddress(address);
        break;
      default:
        break;
    }
  };

  const searchName = async target => {
    const { value } = target;
    setSearchName(value);
  };

  const checkNameInDB = async e => {
    e.preventDefault();
    setIsDev(true);
    const dev = await getDevByName(nameInBD);
    if (dev.length >= 1) {
      const { landLine, mobileLine, address, zipCode } = dev[0];
      setLocalizedDeveloper(dev);
      setLandLine(landLine);
      setAddress(address);
      setMobileLine(mobileLine);
      setZipCode(zipCode);
      console.log(dev);
    }
  };

  const updateDev = async (name, landLine, mobileLine, address, zipCode) => {
    const previousName = localizedDeveloper[0].name;
    await updateDevByName(previousName, name, landLine, mobileLine, address, zipCode)
  };

  return (
    <div>
      <form>
        <h6>Atualizar Dev</h6>
        <label>
          <h6>Nome do Dev</h6>
          <input
            placeholder="Nome Completo"
            name="name"
            maxLength="120"
            onChange={({ target }) => searchName(target)}
          />
        </label>
        <button onClick={e => checkNameInDB(e)}>Buscar Dev</button>
        {IsDev ? (
          <p>Usuário não localizado </p>
        ) : localizedDeveloper.length >= 1 ? (
          <div>
            <label>
              <h6>Nome</h6>
              <input
                placeholder="Nome Completo"
                name="name"
                maxLength="120"
                defaultValue={localizedDeveloper[0].name}
                onChange={({ target }) => handleButton(target)}
              />
            </label>
            <p>{localizedDeveloper.city}</p>
            <label>
              <h6>Telefone Fixo</h6>
              <input
                placeholder="(DDD) XXXX-XXXX"
                name="landLine"
                defaultValue={localizedDeveloper[0].landLine}
                onChange={({ target }) => handleButton(target)}
              />
            </label>
            <label>
              <h6>Telefone Celular</h6>
              <input
                placeholder="(DDD) X XXXX-XXXX"
                name="mobileLine"
                defaultValue={localizedDeveloper[0].mobileLine}
                onChange={({ target }) => handleButton(target)}
              />
            </label>
            <label>
              <h6>CEP</h6>
              <input
                placeholder="12345-678"
                name="zipCode"
                defaultValue={localizedDeveloper[0].zipCode}
                onChange={({ target }) => handleButton(target)}
              />
            </label>
            <label>
              <h6>Endereço</h6>
              {address ? (
                <label>
                  <h6>RUA</h6>
                  <input value={address.logradouro} disabled={true} />
                  <h6>BAIRRO</h6>
                  <input value={address.bairro} disabled={true} />
                  <h6>CIDADE</h6>
                  <input value={address.cidade} disabled={true} />
                  <h6>ESTADO</h6>
                  <input value={address.uf} disabled={true} />
                </label>
              ) : null}
            </label>
          </div>
        ) : null}
      </form>
      <button
        onClick={() => updateDev(name, landLine, mobileLine, address, zipCode)}
      >
        Atualizar
      </button>
    </div>
  );
}

export default InsertDev;
