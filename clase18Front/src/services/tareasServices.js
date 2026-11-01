import axios from "axios";


const urlBase = "http://localhost:3000/api/v1"




const api = axios.create({
    baseURL: urlBase,
    headers: {
        "Content-Type": "application/json"
    }
});

//interceptor de la peticion, moverlo a servicios de tareas
api.interceptors.request.use((config) => {
    //busca en el localStorage el token
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

//interceptor de la respuesta
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            localStorage.removeItem("token");
        }
        return Promise.reject(error);
    }
);





export const obtenerTareasApi = async (signal) => {

    const response = await api.get(
        `${urlBase}/tareas`, {
        signal: signal
    });
    const tareas = response.data
    console.log(tareas);
    return tareas;
}



export const crearTareaApi = async (tarea) => {
    const response = await api.post(
        `${urlBase}/tareas`, tarea
    );
    return response.data;
}


export const borrarTareaApi = async (idTarea) => {
    const response = await api.delete(
        `${urlBase}/tareas/${idTarea}`
    );
    return response.data;
}

