import "../App.css";
import { useState } from "react";

function EditButton(props) {
  const [isModalTrue, setIsModalTrue] = useState(false);

  function clicked() {
    setIsModalTrue(true);
    document.getElementById("edit_btn").toggleAttribute("disabled");
    document.getElementById("remove_btn").toggleAttribute("disabled");
    document.getElementById("create_btn").toggleAttribute("disabled");
  }

  function closeModal() {
    setIsModalTrue(false);
    document.getElementById("edit_btn").toggleAttribute("disabled");
    document.getElementById("remove_btn").toggleAttribute("disabled");
    document.getElementById("create_btn").toggleAttribute("disabled");
  }

  function strValida(strings) {
    for (let i = 0; i < strings.length; i++) {
      if (strings[i].trim() == null || strings[i].trim() === "") {
        return false;
      }
    }
    return true;
  }

  async function postRequest() {
    const cpu = document.getElementById("cpu-text").value;
    const gpu = document.getElementById("gpu-text").value;
    const memory = document.getElementById("memory-text").value;
    const storage = document.getElementById("storage-text").value;
    const psu = document.getElementById("psu-text").value;
    
    if(!strValida([cpu, gpu, memory, storage, psu])) {
      alert("Campos Vazios não são permitidos!")
    }

    const jsonData = `{"id": "${props.pc.id}",
                      "cpu": "${cpu}",
                      "gpu": "${gpu}",
                      "memory": "${memory}",
                      "storage": "${storage}",
                      "psu": "${psu}"}`;
    await fetch("http://localhost:8800/editar_computer/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    });
    closeModal();
    window.location.reload();
  }

  return (
    <>
      {isModalTrue && (
        <div className="modal">
          <div className="modal-content">
            <div className="grid" id="section">
              <label>
                <strong>Processador:</strong>
              </label>
              <input defaultValue={props.pc.cpu} id="cpu-text"></input>
              <label>
                <strong>Placa de vídeo:</strong>
              </label>
              <input defaultValue={props.pc.gpu} id="gpu-text"></input>
              <label>
                <strong>Memória RAM:</strong>
              </label>
              <input defaultValue={props.pc.memory} id="memory-text"></input>
              <label>
                <strong>Armazenamento:</strong>
              </label>
              <input defaultValue={props.pc.storage} id="storage-text"></input>
              <label>
                <strong>Fonte:</strong>
              </label>
              <input defaultValue={props.pc.psu} id="psu-text"></input>
            </div>
            <button className="btn" onClick={() => postRequest()}>
              Enviar
            </button>
            <button className="btn" onClick={() => closeModal()}>
              Cancelar
            </button>
          </div>
        </div>
      )}
      <button className="btn" id="edit_btn" onClick={() => clicked()}>
        Editar Computador
      </button>
    </>
  );
}

export default EditButton;
