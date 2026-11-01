import { useSelector } from "react-redux";

import { useState } from "react";


export const pausa = (segundos) =>
    new Promise((resolve) => setTimeout(resolve, segundos * 1000)); //tiempo en segundos





export const useObtenerNombreUsuario = () => {
    const listaUsuarios = useSelector((state) => state.usersSlice); //este state representa la pizza completa

    const obtenerNombreUsuario = (userId) => {
        const usuario = listaUsuarios?.find((u) => u.id == userId);
        // console.log('usuario en useObtenerNombreUsuario', usuario)
        const usuarioSalida = usuario ? usuario.name : undefined;
        // console.log('usuarioSalida en useObtenerNombreUsuario', usuarioSalida)
        return usuarioSalida;

    }

    return obtenerNombreUsuario;
};









//Solo es un ejemplo
export const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial);


    const aumentar = (cont) => {
        setContador(cont + 1);
    };

    const disminuir = (cont) => {
        setContador(cont - 1);
    };

    return [contador, aumentar, disminuir];
};


