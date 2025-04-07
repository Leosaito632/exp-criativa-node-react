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

  return (
    <button className="btn" id="edit_btn" >
      Editar Usuário
    </button>
  );
}

export default EditButton;
