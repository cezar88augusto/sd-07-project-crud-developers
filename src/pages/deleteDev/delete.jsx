import React, { useState } from "react";
import { deleteDev, getDevByName } from "../../services/api";
import { useHistory } from "react-router-dom";

function DeleteDev() {
  const [name, setName] = useState("");
  const [isThereUser, setIsThereUser] = useState(true);
  const history = useHistory();

  const handleButton = async target => {
    const { value } = target;
    setName(value);
  };

  const removeDev = async name => {
    const isDev = await getDevByName(name);
    if (isDev.length >= 1) {
      setIsThereUser(true);
      await deleteDev(name);
      alert("Usuário Deletado!");
      history.push("/");
    }else{
      setIsThereUser(false);
    }
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
      { !isThereUser ? <p>Usuário não encontrado.</p> : null }
      <button onClick={() => removeDev(name)} type="button">
        Delete
      </button>
    </div>
  );
}

export default DeleteDev;
