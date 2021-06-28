import React from "react";

function DevCard(props) {
  const { dev } = props;
  const {
    name,
    landLine,
    mobileLine,
    street,
    district,
    city,
    state,
    zipCode,
    langs
  } = dev;
  return (
    <div>
      <p>Nome: {name}</p>
      <p>Telefone fixo: {landLine}</p>
      <p>Celular: {mobileLine}</p>
      <p>Rua: {street}</p>
      <p>Bairro: {district}</p>
      <p>Cidade: {city}</p>
      <p>Estado: {state}</p>
      <p>CEP: {zipCode}</p>
      <p>
        Linguages:{" "}
        {langs.map(lang => (
          <p>{lang.name}</p>
        ))}
      </p>
    </div>
  );
}

export default DevCard;
