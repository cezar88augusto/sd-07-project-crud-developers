
import { Link } from "react-router-dom";

function index() {
  return (
    <div>
      <Link to="select">Listar</Link>
      <br/>
      <Link to="insert">Cadastrar</Link>
      <br/>
      <Link to="update">Atualizar</Link>
      <br/>
      <Link to="delete">Deletar</Link>
    </div>
  );
}

export default index;
