import "../App.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Header() {
  const location = useLocation();
  const [titulo, setTitulo] = useState("");

  useEffect(() => {
    switch (window.location.pathname) {
      case "/crud":
        setTitulo("Gerenciar Computadores");
        break;
      case "/":
        setTitulo("Listar Computadores");
        break;
      case "/detalhes":
        setTitulo("Mais Detalhes")
        break;
      default:
        setTitulo("Listar Computadores");
    }
  }, [location.pathname]);

  return (
    <div className="header">
      <h1 className="titulo" id="titulo">
        {titulo}
      </h1>
      <Link className="btn" to="/">
        Listar Computadores
      </Link>
      <Link className="btn" to="/crud">
        Gerenciar Computadores
      </Link>
    </div>
  );
}

export default Header;
