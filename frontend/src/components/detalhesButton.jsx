import { Link } from "react-router-dom";
import { useContext } from "react";

import UserContext from "./userContext";

function DetalheButton(props) {
  const {user, setUser} = useContext(UserContext)

  return (
    <Link to={"/detalhes"} class="btn" id="detalhe_button" onClick={()=> setUser(props.user)}>
      Ver mais detalhes
    </Link>
  );
}

export default DetalheButton;
