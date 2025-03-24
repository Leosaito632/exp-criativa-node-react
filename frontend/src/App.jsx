import DataList from "./components/datalist";
import { useState } from "react";
import "./App.css";

import RemoveButton from "./components/removeButton";
import EditButton from "./components/editButton";

function App() {
  const [isModalTrue, setIsModalTrue] = useState(false);
  const [itemClicked, setItemClicked] = useState(null);

  function clicked(item) {
    var elem = document.getElementById("main");
    elem.setAttribute("class", "blur");
    document.getElementById("titulo").setAttribute("class", "blur-titulo");
    document.getElementById("createUserBtn").setAttribute("class", "blur-btn");
    document.getElementById("createUserBtn").toggleAttribute("disabled")
    setItemClicked(item);
    setIsModalTrue(true);
  }

  function closeModal() {
    var elem = document.getElementById("main");
    elem.setAttribute("class", "main");
    document.getElementById("titulo").setAttribute("class", "titulo");
    document.getElementById("createUserBtn").setAttribute("class", "btn");
    document.getElementById("createUserBtn").toggleAttribute("disabled")
    setIsModalTrue(false);
    setItemClicked(null);
  }

  return (
    <div>
      <div className="div-externa">
        {isModalTrue && itemClicked && (
          <div className="modal">
            <div className="modal-content">
              <h1>Detalhes do Usuário</h1>
              <div className="grid" id="section">
                <label>
                  <strong>Nome:</strong>
                </label>
                <p id="name-text">{itemClicked.nome}</p>
                <label>
                  <strong>Idade:</strong>
                </label>
                <p id="idade-text"> {itemClicked.idade}</p>
                <label>
                  <strong>CPF:</strong>
                </label>
                <p id="cpf-text">{itemClicked.cpf}</p>
              </div>
              <button className="btn" onClick={closeModal}>
                Fechar
              </button>
              <RemoveButton id={itemClicked.idusuarios} />
              <EditButton user={itemClicked} />
            </div>
          </div>
        )}
      </div>
      <DataList clicked={clicked} />
    </div>
  );
}

export default App;
