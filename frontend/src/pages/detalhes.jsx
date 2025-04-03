import { useContext } from "react";
import UserContext from "../components/userContext";

function Detalhes() {
  const {user, setUser} = useContext(UserContext)

  return (
    <div className="div-externa">
      <div className="center-div">
        <div className="modal-content">
          <h1>Detalhes do Usuário</h1>
          <div className="grid" id="section">
            <label>
              <strong>Nome:</strong>
            </label>
            <p id="name-text">{user.nome}</p>
            <label>
              <strong>Idade:</strong>
            </label>
            <p id="idade-text"> {user.idade}</p>
            <label>
              <strong>CPF:</strong>
            </label>
            <p id="cpf-text">{user.cpf}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detalhes;
