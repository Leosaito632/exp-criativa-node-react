import { useContext, createContext } from "react";

// import UserContext from "../components/context";

function Detalhes() {
  // const { user, setUser } = useContext(UserContext);

  return (
    <div className="div-externa">
      <div className="modal">
        <div className="modal-content">
          <h1>Detalhes do Usuário</h1>
          <div className="grid" id="section">
            <label>
              <strong>Nome:</strong>
            </label>
            <p id="name-text">{}</p>
            <label>
              <strong>Idade:</strong>
            </label>
            <p id="idade-text"> {}</p>
            <label>
              <strong>CPF:</strong>
            </label>
            <p id="cpf-text">{}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detalhes;
