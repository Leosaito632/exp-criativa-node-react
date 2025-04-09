import "../App.css";
import { useState } from "react";

function EditButton(props) {
  const [isModalTrue, setIsModalTrue] = useState(false);
  const [itemClicked, setItemClicked] = useState(null);

  function clicked(pc) {
    setItemClicked(pc);
    setIsModalTrue(true);
    document.getElementById("edit_btn").toggleAttribute("disabled");
    document.getElementById("remove_btn").toggleAttribute("disabled");
  }

  function closeModal() {
    setIsModalTrue(false);
    setItemClicked(null);
    document.getElementById("edit_btn").toggleAttribute("disabled");
    document.getElementById("remove_btn").toggleAttribute("disabled");
  }

  async function postRequest() {
    const nome = document.getElementById("name-text").value;
    const idade = document.getElementById("idade-text").value;
    const cpf = document.getElementById("cpf-text").value;
    const jsonData = `{"id": "${props.pc.idusuarios}",
                      "nome": "${nome}",
                      "idade": "${idade}",
                      "cpf": "${cpf}"}`;
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
      {isModalTrue && itemClicked && (
        <div className="modal">
          <div className="modal-content">
            <div className="grid" id="section">
              <label>
                <strong>Nome:</strong>
              </label>
              <input defaultValue={props.pc.nome} id="name-text"></input>
              <label>
                <strong>Idade:</strong>
              </label>
              <input defaultValue={props.pc.idade} id="idade-text"></input>
              <label>
                <strong>CPF:</strong>
              </label>
              <input defaultValue={props.pc.cpf} id="cpf-text"></input>
            </div>
            <button className="btn" onClick={() => postRequest()}>
              Enviar
            </button>
          </div>
        </div>
      )}
      <button className="btn" id="edit_btn" onClick={() => clicked(props.pc)}>
        Editar Usuário
      </button>
    </>
  );
}

export default EditButton;
