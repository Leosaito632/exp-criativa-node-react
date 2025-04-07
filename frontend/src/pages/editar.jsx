import { useContext } from "react";
import UserContext from "../components/userContext";
import EditButton from "../components/editButton";

function Detalhes() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="div-externa">
      <div className="center-div">
        <div className="modal-content">
          <h1>Detalhes do Usuário</h1>
          <div className="grid" id="section">
            <label>
              <strong>Nome:</strong>
            </label>
            <input id="name-input"></input>
            <label>
              <strong>Idade:</strong>
            </label>
            <input id="idade-input"></input>
            <label>
              <strong>CPF:</strong>
            </label>
            <input id="cpf-input"></input>
          </div>
          <EditButton></EditButton>
        </div>
      </div>
    </div>
  );
}
export default Detalhes;
