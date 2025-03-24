import { useEffect, useState } from "react";
import "../App.css";

import CreateButton from "./createUserButton.jsx";

function DataList(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8800/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div className="header">
        <h1 className="titulo" id="titulo">Listagem de Usuarios</h1>
        <CreateButton></CreateButton>
      </div>

      <div className="main" id="main" >
        <div className="users" id="users">
          <ul className="lista">
            {data.map((user) => (
              <li key={user.idusuarios} className="itens">
                <div className="grid-horizontal">
                  <p>ID: {user.idusuarios}</p>
                  <p>{user.nome}</p>
                  <div></div>
                  <div>
                    <button id="detalhes-btn" onClick={() => props.clicked(user)} class="btn">
                      Ver mais detalhes
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DataList;
