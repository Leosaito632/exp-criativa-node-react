import DetalheButton from "./detalhesButton";
import RemoveButton from "./removeButton";
import EditButton from "./editButton";
import UserContext from "./userContext";

import { useEffect, useState, useContext } from "react";

import "../App.css";

function DataList(props) {
  const [data, setData] = useState([]);
  const [exibirCrud, setExibirCrud] = useState(false);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    setExibirCrud(props.crud);
    const url = "http://localhost:8800/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div clas sName="main" id="main">
      <div className="users" id="users">
        <ul className="lista">
          {data.map((user) => (
            <li key={user.idusuarios} className="itens">
              <div className="grid-horizontal">
                <p>ID: {user.idusuarios}</p>
                <p>{user.nome}</p>
                <div></div>
                {!exibirCrud && <DetalheButton user={user}></DetalheButton>}
                {exibirCrud && (
                  <>
                    <RemoveButton id={user.idusuarios}></RemoveButton>
                    {/* <EditButton user={user}></EditButton> */}
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DataList;
