import "../App.css";
import { useState } from "react";

function CreateButton() {
  const [isModalTrue, setIsModalTrue] = useState(false);

  function clicked() {
    setIsModalTrue(true);
    document.getElementById("edit_btn").toggleAttribute("disabled");
    document.getElementById("remove_btn").toggleAttribute("disabled");
  }

  function closeModal() {
    setIsModalTrue(false);
    document.getElementById("edit_btn").toggleAttribute("disabled");
    document.getElementById("remove_btn").toggleAttribute("disabled");
  }

  function strValida(strings) {
    for (let i = 0; i < strings.length; i++) {
      if (strings[i].trim() == null || strings[i].trim() === "") {
        return false;
      }
    }
    return true;
  }


  async function putRequest() {
    const cpu = document.getElementById("cpu-text").value;
    const gpu = document.getElementById("gpu-text").value;
    const memory = document.getElementById("memory-text").value;
    const storage = document.getElementById("storage-text").value;
    const psu = document.getElementById("psu-text").value;

    if(!strValida([cpu, gpu, memory, storage, psu])) {
      alert("Campos Vazios não são permitidos!")
    }

    const jsonData = `{"cpu": "${cpu}",
                      "gpu": "${gpu}",
                      "memory": "${memory}",
                      "storage": "${storage}",
                      "psu": "${psu}"}`;

    await fetch("http://localhost:8800/criar_computer", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    });
    closeModal();
    window.location.reload();
  }

  return (
    <div className="header">
      <button onClick={() => clicked()} className="btn" id="create_btn">
        Criar Computador
      </button>
      <div className="div-externa">
        {isModalTrue && (
          <div className="modal">
            <div className="modal-content">
              <div className="grid" id="section">
                <label>
                  <strong>Processador:</strong>
                </label>
                <input id="cpu-text"></input>
                <label>
                  <strong>Placa de vídeo:</strong>
                </label>
                <input id="gpu-text"></input>
                <label>
                  <strong>Memória RAM:</strong>
                </label>
                <input id="memory-text"></input>
                <label>
                  <strong>Armazenamento:</strong>
                </label>
                <input id="storage-text"></input>
                <label>
                  <strong>Fonte:</strong>
                </label>
                <input id="psu-text"></input>
              </div>
              <button className="btn" onClick={() => putRequest()}>
                Enviar
              </button>
              <button className="btn" onClick={() => closeModal()}>
              Cancelar
            </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateButton;
