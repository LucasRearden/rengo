import { useEffect, useState } from "react";
import Menu from "./Menu.jsx";
import Contenido from "./Contenido.jsx";
import { Outlet } from "react-router-dom";
import App from "../App.jsx";
import { useNavigate } from "react-router-dom";
import { pausa } from "../utils/utils.js";

const Dashboard = () => {
  const navigate = useNavigate();

  const [estaLogueado, setEstaLogueado] = useState(false);

  //funcion asincrona con delay de 3 segundos
  const validarLogin = async () => {
    const token = window.localStorage.getItem("token");
    const estaLogueado = token ? true : false;
    // await pausa(1);
    if (!estaLogueado) {
      navigate("/login");
    } else {
      setEstaLogueado(estaLogueado);
    }
  };

  useEffect(() => {
    validarLogin();
  });

  return (
    <>
      {estaLogueado ? (
        <div>
          {/* <Outlet></Outlet> */}

          <App></App>
        </div>
      ) : (
        <p>Cargando</p>
      )}
    </>
  );
};

export default Dashboard;
