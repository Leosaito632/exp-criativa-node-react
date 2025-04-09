import { Link } from "react-router-dom";
import { useContext } from "react";

import PcContext from "./pcContext";

function DetalheButton(props) {
  const {pc, setPc} = useContext(PcContext)

  return (
    <Link to={"/detalhes"} class="btn" id="detalhe_button" onClick={()=> setPc(props.pc)}>
      Ver mais detalhes
    </Link>
  );
}

export default DetalheButton;
