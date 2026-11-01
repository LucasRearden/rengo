import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login.jsx";
import Menu from "./Menu.jsx";
import Dashboard from "./Dashboard.jsx";
import Contenido from "./Contenido.jsx";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        {/* <Route path="registro" element={<Registro />} /> */}
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Menu />} />
          <Route path="contenido" element={<Contenido />} />
          {/* <Route index element={<App />} />
          <Route path="graficasCompletadas" element={<GraficasCompletadas />} />
          <Route path="prueba" element={<Prueba />} />
          <Route path="editarTarjeta/:tareaId" element={<EditarTarjeta />} />
          <Route path="tarjetasListado" element={<TarjetasListado />} /> */}
        </Route>
        <Route
          path="*"
          element={<Navigate to="/login" replace></Navigate>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Rutas;
