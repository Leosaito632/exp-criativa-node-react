import { useContext } from "react";
import PcContext from "../components/pcContext";

function Detalhes() {
  const {pc, setPc} = useContext(PcContext)

  return (
    <div className="div-externa">
      <div className="center-div">
        <div className="modal-content">
          <h1>Detalhes do Computador</h1>
          <div className="grid" id="section">
            <label>
              <strong>Processador:</strong>
            </label>
            <p>{pc.cpu}</p>
            <label>
              <strong>Placa de vídeo:</strong>
            </label>
            <p> {pc.gpu}</p>
            <label>
              <strong>Memória RAM:</strong>
            </label>
            <p>{pc.memory}</p>
            <label>
              <strong>Armazenamento:</strong>
            </label>
            <p>{pc.storage}</p>
            <label>
              <strong>Fonte:</strong>
            </label>
            <p>{pc.psu}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detalhes;
