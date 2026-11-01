import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
import { ToastContainer } from "react-toastify";

import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Rutas from "./components/Rutas.jsx";
import EjemploCustomHook from "./components/EjemploCustomHook.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ToastContainer />
    {/* <App /> */}
    <Rutas />
    {/* <EjemploCustomHook></EjemploCustomHook> */}
  </Provider>,
);
