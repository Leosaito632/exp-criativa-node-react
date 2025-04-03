import "../App.css";

function EditButton(props) {
  async function postRequest() {
    const nome = document.getElementById("name-text").value;
    const idade = document.getElementById("idade-text").value;
    const cpf = document.getElementById("cpf-text").value;
    const jsonData = `{"id": "${props.user.idusuarios}",
                      "nome": "${nome}",
                      "idade": "${idade}",
                      "cpf": "${cpf}"}`;
    await fetch("http://localhost:8800/editar_usuario/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    });
    window.location.reload();
  }

  function alterarForm() {
    // const section = document.getElementById("section");
    // const paragraphs = section.querySelectorAll("p");

    // for (const p of paragraphs) {
    //   const id = p.id;
    //   const input = document.createElement("input");
    //   input.id = id;
    //   input.type = "text";
    //   input.value = p.textContent;
    //   section.replaceChild(input, p);
    // }
    // const edit_btn = document.getElementById("edit_btn");
    // edit_btn.innerHTML = "Ok";
    // edit_btn.addEventListener("click", postRequest);
  }

  return (
    <button className="btn" id="edit_btn" onClick={alterarForm}>
      Editar Usuário
    </button>
  );
}

export default EditButton;
