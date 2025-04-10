import DetalheButton from "./detalhesButton";
import RemoveButton from "./removeButton";
import EditButton from "./editButton";
import CreateButton from "./createPcButton"

import { useEffect, useState } from "react";

import "../App.css";

function DataList(props) {
  const [data, setData] = useState([]);
  const [exibirCrud, setExibirCrud] = useState(false);

  useEffect(() => {
    setExibirCrud(props.crud);
    const url = "http://localhost:8800/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  },[props.crud]);

  return (
    <div className="main" id="main">
      <div className="pcs" id="pcs">
        {exibirCrud && (
          <CreateButton></CreateButton>
        )}
        <ul className="lista">
          {data.map((pc) => (
            <li key={pc.id} className="itens">
              <div className="grid-horizontal">
                <p>ID: {pc.id}</p>
                <p>{pc.cpu}</p>
                <div></div>
                {!exibirCrud && <DetalheButton pc={pc}></DetalheButton>}
                {exibirCrud && (
                  <>
                    <RemoveButton id={pc.id}></RemoveButton>
                    <EditButton pc={pc}></EditButton>
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
