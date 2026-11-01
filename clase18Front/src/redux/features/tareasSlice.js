
import { createSlice } from "@reduxjs/toolkit";


//representa el arreglo de tareas inicial
//este estado inicial va a ser el estado que va a tener el state
//al cargar la app, luego el state definido en el slice, representa
//el estado que tiene este pedazo de la pizza completa, en este caso 
//es el estado de tareas
const initialState = []


const tareasSlice = createSlice({
    name: "tareasSlice",
    initialState,
    reducers: {
        cargarTareasInicialesSlice: (state, action) => {
            const listaTareas = action.payload;
            return listaTareas;
        },
        changeCheckedSlice: (state, action) => {
            const { id, checked } = action.payload;
            console.log(`Tarea ${id} - ${checked}`);
            state.find((tarea) => tarea.id === id).completed = checked; //validar que encontro la tarea
        },

        cambiarTituloTareaSlice: (state, action) => {
            const { id, title } = action.payload;
            console.log('id, title', id, title)
            const tareaEncontrada = state.find((tarea) => tarea.id === id);
            if (tareaEncontrada) {
                tareaEncontrada.title = title
            }
        },


        agregarTareaSlice: (state, action) => {
            const tarea = action.payload;
            state.push(tarea)
        },
        borrarTareaSlice: (state, action) => {
            const id = action.payload;
            const stateAux = state.filter((tarea) => tarea.id !== id);
            return stateAux;
        },
    },
});


export const { cargarTareasInicialesSlice, changeCheckedSlice, cambiarTituloTareaSlice, agregarTareaSlice, borrarTareaSlice } =
    tareasSlice.actions;
export default tareasSlice.reducer;