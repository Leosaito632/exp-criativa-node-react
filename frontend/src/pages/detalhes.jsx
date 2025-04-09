import { useContext } from "react";
import PcContext from "../components/pcContext";

function Detalhes() {
  const {pc, setPc} = useContext(PcContext)

  return (
    <div className="div-externa">
      <div className="center-div">
        <div className="modal-content">
          <h1>Detalhes do Usuário</h1>
          <div className="grid" id="section">
            <label>
              <strong>Nome:</strong>
            </label>
            <p id="name-text">{pc.nome}</p>
            <label>
              <strong>Idade:</strong>
            </label>
            <p id="idade-text"> {pc.idade}</p>
            <label>
              <strong>CPF:</strong>
            </label>
            <p id="cpf-text">{pc.cpf}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detalhes;
