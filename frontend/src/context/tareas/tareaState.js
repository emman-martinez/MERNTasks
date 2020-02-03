import React, { useReducer } from 'react';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import { 
        TAREAS_PROYECTO,
        AGREGAR_TAREA
    } from './../../types';

const TareaState = (props) => {

    // State inicial
    const initialState = {
        tareas: [
            { id:1, proyectoId: 1, nombre: 'Elegir Plataforma', estado: true },
            { id:2, proyectoId: 2, nombre: 'Elegir Colores', estado: false },
            { id:3, proyectoId: 3, nombre: 'Elegir Plataformas de pago', estado: false },
            { id:4, proyectoId: 4, nombre: 'Elegir Hosting', estado: true },
            { id:5, proyectoId: 1, nombre: 'Elegir Plataforma', estado: true },
            { id:6, proyectoId: 2, nombre: 'Elegir Colores', estado: false },
            { id:7, proyectoId: 3, nombre: 'Elegir Plataformas de pago', estado: false },
            { id:8, proyectoId: 4, nombre: 'Elegir Plataforma', estado: true },
            { id:9, proyectoId: 1, nombre: 'Elegir Colores', estado: false },
            { id:10, proyectoId: 2, nombre: 'Elegir Plataformas de pago', estado: false },
            { id:11, proyectoId: 7, nombre: 'Elegir Plataforma', estado: true },
            { id:12, proyectoId: 5, nombre: 'Elegir Colores', estado: false },
            { id:13, proyectoId: 6, nombre: 'Elegir Plataformas de pago', estado: false },
        ],
        tareasproyecto: null
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(tareaReducer, initialState);

    // ***** Inicio CRUD ***** //

    const obtenerTareas = (proyectoId) => { // Obtener las tareas de un proyecto
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        });
    };

    const agregarTarea = (tarea) => { // Agregar una tarea al proyecto seleccionado
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        });
    };

    // ***** Fin CRUD ***** //

    return (
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                obtenerTareas, 
                agregarTarea
            }}
        >
            {props.children}  
        </tareaContext.Provider>
    );

}

export default TareaState;