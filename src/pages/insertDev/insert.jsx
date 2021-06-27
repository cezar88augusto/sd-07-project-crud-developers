import React, { useEffect, useState } from "react";
import { findCEPinAPI } from "../../services/apiCep";
import { setDev } from "../../services/api";
let languages = [];
const dataLanguages = [
  { id: 1, language: 'JAVA'},
  { id: 2, language: 'PYTHON'},
  { id: 3, language: 'JAVASCRIPT'},
  { id: 4, language: 'GOLANG'},
  { id: 5, language: 'CSHARP'},
  { id: 6, language: 'ELIXIR'},
]

function InsertDev() {
  const [name, setName] = useState("");
  const [landLine, setLandLine] = useState("");
  const [mobileLine, setMobileLine] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [allLanguages, setAllLanguages] = useState([]);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  useEffect(() => {
    if (
      name !== "" &&
      mobileLine !== "" &&
      address !== undefined &&
      zipCode !== ""
    )
    setIsButtonVisible(false);
    else setIsButtonVisible(true);
  }, [name, mobileLine, address, zipCode, isButtonVisible]);

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
      case "lang":
        updateLanguages(value);
        break;
      default:
        break;
    }
  };

  const updateLanguages = (value) => {
    const isThereLanguage = languages.some(language => language === value);
    if (isThereLanguage) {
      const index = languages.findIndex(language => language === value);
      languages.splice(index, 1);
      const removedLanguage = languages.filter(language => language !== value);
      setAllLanguages(removedLanguage);
    } else {
      languages.push(value);
      setAllLanguages(languages);
    }
  };

  const addDev = async (name, landLine, mobileLine, address, zipCode, allLanguages) => {
    const { uf, cidade, bairro, logradouro } = address;
    const formatedAddress = {
      state: uf,
      city: cidade,
      district: bairro,
      street: logradouro
    };
    await setDev(name, landLine, mobileLine, formatedAddress, zipCode, allLanguages);
  };

  return (
    <div>
      <form>
        <h6>Inserir Dev</h6>
        <label>
          <h6>Nome</h6>
          <input
            placeholder="Nome Completo"
            name="name"
            maxLength="120"
            onChange={({ target }) => handleButton(target)}
          />
        </label>
        <label>
          <h6>Telefone Fixo</h6>
          <input
            placeholder="(DDD) XXXX-XXXX"
            name="landLine"
            onChange={({ target }) => handleButton(target)}
          />
        </label>
        <label>
          <h6>Telefone Celular</h6>
          <input
            placeholder="(DDD) X XXXX-XXXX"
            name="mobileLine"
            onChange={({ target }) => handleButton(target)}
          />
        </label>
        <label>
          <h6>CEP</h6>
          <input
            placeholder="12345-678"
            name="zipCode"
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
        <h6>Linguagens (Mínimo 2)</h6>
        {
          dataLanguages.map(({id, language}, index) => (
            <div key={index}>
              <input
                id={`lang${id}`}
                type="checkbox"
                name="lang"
                value={id}
                onChange={({ target }) => handleButton(target)}
              />
              <label htmlFor={`lang${id}`}> {language} </label>
            </div>
          ))
        }  
      </form>
      <button
        onClick={() =>
          addDev(name, landLine, mobileLine, address, zipCode, allLanguages)
        }
        type="button"
        disabled={ isButtonVisible }
      >
        Cadastrar
      </button>
    </div>
  );
}

export default InsertDev;
