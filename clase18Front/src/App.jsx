import "./App.css";
import Dashboard from "./components/Dashboard.jsx";
import Login from "./components/Login.jsx";
import { useState, useEffect } from "react";

import "./styles/estilos.css";
import Contenido from "./components/Contenido.jsx";
import Menu from "./components/Menu.jsx";

const App = () => {
  return (
    <>
      <Menu />
      <Contenido></Contenido>
    </>
  );
};

export default App;
