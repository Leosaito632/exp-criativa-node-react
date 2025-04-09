import "../App.css";
import { useState } from "react";

function CreateButton() {
  const [isCreatePc, setIsCreatePc] = useState(false);

  function toggleButtons() {
    const div = document.getElementById("pcs");
    const buttons = div.querySelectorAll("button");
    for (const b of buttons) {
      b.toggleAttribute("disabled");
    }
  }

  function createPcClicked() {
    toggleButtons();
    var elem = document.getElementById("main");
    elem.setAttribute("class", "blur");
    document.getElementById("titulo").setAttribute("class", "blur-titulo");
    document.getElementById("createPcBtn").setAttribute("class", "blur-btn");
    setIsCreatePc(true);
  }

  function closeCreatePc() {
    toggleButtons();
    var elem = document.getElementById("main");
    elem.setAttribute("class", "main");
    document.getElementById("titulo").setAttribute("class", "titulo");
    document.getElementById("createPcBtn").setAttribute("class", "btn");
    setIsCreatePc(false);
  }

  function saveCreatedPc() {
    putRequest();
    closeCreatePc();
  }

  async function putRequest() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let cpf = document.getElementById("cpf").value;

    const jsonData = `{"nome": "${nome}",
						"idade": "${idade}",
						"cpf": "${cpf}"}`;

    await fetch("http://localhost:8800/criar_computer", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    });
    window.location.reload();
  }

  return (
    <div className="header">
      <button onClick={createPcClicked} className="btn" id="createPcBtn">
        CRIAR USUARIO
      </button>
      <div className="div-externa">
        {isCreatePc && (
          <div className="modal">
            <div className="modal-content">
              <h1>Criar Usuário</h1>
              <form id="form" className="grid">
                <label>
                  <strong>Nome:</strong>
                </label>
                <input className="input" type="text" name="nome" id="nome" />
                <label>
                  <strong>Idade:</strong>
                </label>
                <input
                  className="input"
                  type="number"
                  name="idade"
                  id="idade"
                />
                <label>
                  <strong>CPF:</strong>
                </label>
                <input className="input" type="text" name="cpf" id="cpf" />
              </form>
              <button className="btn" onClick={saveCreatedPc}>
                Enviar
              </button>
              <button className="btn" onClick={closeCreatePc}>
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateButton;
