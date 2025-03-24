import "../App.css";

function RemoveButton(props) {
  async function deleteRequest() {
    const jsonData =`{"id": "${props.id}"}`;
    await fetch("http://localhost:8800/remover_usuario", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    });
    window.location.reload();
    }

  return (
    <button className="btn" onClick={deleteRequest}>
      Remover Usuário
    </button>
  );
}

export default RemoveButton;
