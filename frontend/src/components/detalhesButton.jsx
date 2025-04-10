import { Link } from "react-router-dom";
import { useContext } from "react";

import PcContext from "./pcContext";

function DetalheButton(props) {
  const {setPc} = useContext(PcContext)

  return (
    <Link to={"/detalhes"} className="btn" id="detalhe_button" onClick={()=> setPc(props.pc)}>
      Ver mais detalhes
    </Link>
  );
}

export default DetalheButton;
