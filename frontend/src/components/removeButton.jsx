import "../App.css";

function RemoveButton(props) {
  async function deleteRequest() {
    const jsonData =`{"id": "${props.id}"}`;
    await fetch("http://localhost:8800/remover_computer", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    });
    window.location.reload();
    }

  return (
    <button id="remove_btn" className="btn" onClick={deleteRequest}>
      Remover Computador
    </button>
  );
}

export default RemoveButton;
