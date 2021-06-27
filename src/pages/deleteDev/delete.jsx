import React, { useState, useEffect } from "react";
import { deleteDev } from "../../services/api";

function DeleteDev() {
  const [name, setName] = useState("");

  const handleButton = async (target) => {
    const { value } = target;
    setName(value);
  };

  const removeDev = async (name) => {
    await deleteDev(name);
  };

  return (
    <div>
      <h6>Deletar de Dev</h6>
      <form>
        <label>
          <h6>Nome</h6>
          <input
            placeholder="Nome Completo"
            name="name"
            onChange={({ target }) => handleButton(target)}
          />
        </label>
      </form>
      <button onClick={() => removeDev(name)} type="button">
        Delete
      </button>
    </div>
  );
}

export default DeleteDev;
