import DetalheButton from "./detalhesButton";
import RemoveButton from "./removeButton";
import EditButton from "./editButton";
import PcContext from "./pcContext";

import { useEffect, useState, useContext } from "react";

import "../App.css";

function DataList(props) {
  const [data, setData] = useState([]);
  const [exibirCrud, setExibirCrud] = useState(false);
  const { pc, setPc } = useContext(PcContext);

  useEffect(() => {
    setExibirCrud(props.crud);
    const url = "http://localhost:8800/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div clas sName="main" id="main">
      <div className="pcs" id="pcs">
        <ul className="lista">
          {data.map((pc) => (
            <li key={pc.idusuarios} className="itens">
              <div className="grid-horizontal">
                <p>ID: {pc.idusuarios}</p>
                <p>{pc.nome}</p>
                <div></div>
                {!exibirCrud && <DetalheButton pc={pc}></DetalheButton>}
                {exibirCrud && (
                  <>
                    <RemoveButton  id={pc.idusuarios}></RemoveButton>
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
