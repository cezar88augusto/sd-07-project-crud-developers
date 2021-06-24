import React, { useEffect, useState } from "react";
import { findCEPinAPI } from "../../service/index";
let languages = [];

function InsertDev() {
  const [name, setName] = useState("");
  const [landLine, setLandLine] = useState("");
  const [mobileLine, setMobileLine] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [allLanguages, setAllLanguages] = useState([]);

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
        const isThereLanguage = languages.some(language => language === value);
        if (isThereLanguage) {
          const index = languages.findIndex(language => language === value);
          languages.splice(index, 1);
          const removedLanguage = languages.filter(
            language => language !== value
          );
          setAllLanguages(removedLanguage);
        } else {
          languages.push(value);
          setAllLanguages(languages);
        }
        break;
      default:
        break;
    }
  };

  return (
    <form>
      <h6>Inserir Dev</h6>
      <label>
        <h6>Nome</h6>
        <input
          placeholder="Nome Completo"
          name="name"
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

      <h6>Linguagens</h6>
      <label>
        <input
          type="checkbox"
          id="lang1"
          name="lang"
          value="JAVA"
          onChange={({ target }) => handleButton(target)}
        />
        <label htmlFor="lang1"> JAVA </label>
        <br />
        <input
          type="checkbox"
          id="lang2"
          name="lang"
          value="PYTHON"
          onChange={({ target }) => handleButton(target)}
        />
        <label htmlFor="lang2"> PYTHON </label>
        <br />
        <input
          type="checkbox"
          id="lang3"
          name="lang"
          value="JAVASCRIPT"
          onChange={({ target }) => handleButton(target)}
        />
        <label htmlFor="lang3"> JAVASCRIPT</label>
        <br />
        <input
          type="checkbox"
          id="lang4"
          name="lang"
          value="GOLANG"
          onChange={({ target }) => handleButton(target)}
        />
        <label htmlFor="lang4"> GOLANG</label>
        <br />
        <input
          type="checkbox"
          id="lang5"
          name="lang"
          value="CSHARP"
          onChange={({ target }) => handleButton(target)}
        />
        <label htmlFor="lang5"> CSHARP</label>
        <br />
        <input
          type="checkbox"
          id="lang6"
          name="lang"
          value="ELIXIR"
          onChange={({ target }) => handleButton(target)}
        />
        <label htmlFor="lang6"> ELIXIR</label>
        <br />
      </label>
    </form>
  );
}

export default InsertDev;
