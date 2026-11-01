import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Agregar from "./Agregar.jsx";
import Tareas from "./Tareas.jsx";
import { obtenerTareasApi } from "../services/tareasServices.js";
import { cargarTareasInicialesSlice } from "../redux/features/tareasSlice.js";
import MiGrafica from "./MiGrafica.jsx";
import { cargaInicialUsersSlice } from "../redux/features/usersSlice.js";
import { obtenerUsuariosApi } from "../services/usersServices.js";
import { Col, Container, Row } from "react-bootstrap";

const Contenido = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();

    const obtenerTareas = async () => {
      try {
        const listaTareas = await obtenerTareasApi(controller.signal);
        dispatch(cargarTareasInicialesSlice(listaTareas));

        const listaUsuarios = await obtenerUsuariosApi(controller.signal);
        dispatch(cargaInicialUsersSlice(listaUsuarios));
      } catch (error) {
        if (error.code === "ERR_CANCELED") {
          console.log("Petición cancelada");
          return;
        }
        console.error(error);
        // setError("No se pudieron cargar los usuarios");
      }
    };

    //llamamos al servicio de tareas
    obtenerTareas();
    //limpiar la llamada a la api cuando se destruya el componente
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="contenido">
      <Agregar />

      <Container>
        <Row>
          <Col>
            <MiGrafica></MiGrafica>
          </Col>
          <Col>
            <Tareas />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contenido;
