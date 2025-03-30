import UserContext from "./context";

import { Link } from "react-router-dom";
import { useContext } from "react";


function DetalheButton(props) {
  // const { user, setUser } = useContext(UserContext);

  return (
    <Link
      // onClick={() => setUser(props.user)}
      to={"/detalhes"}
      class="btn"
      id="detalhe_button"
    >
      Ver mais detalhes
    </Link>
  );
}

export default DetalheButton;
