import React, { useReducer } from 'react';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import uuid from 'uuid';
import { 
        TAREAS_PROYECTO,
        AGREGAR_TAREA, 
        VALIDAR_TAREA,
        ELIMINAR_TAREA,
        ESTADO_TAREA,
        TAREA_ACTUAL,
        ACTUALIZAR_TAREA,
        LIMPIAR_TAREA
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
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
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
        tarea.id = uuid.v4();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        });
    };

    
    const validarTarea = () => { // Valida y muestra un error en caso de que sea necesario
        dispatch({
            type: VALIDAR_TAREA
        });
    };

    const eliminarTarea = (id) => { // Eliminar tarea por id
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        });
    };

    const cambiarEstadoTarea = (tarea) => { // Cambia el estado de cada tarea
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        });
    };

    const guardarTareaActual = (tarea) => { // Extrae una tarea para edición
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        });
    };

    const actualizarTarea = tarea => { // Edita o modifica una tarea
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        });
    };

    const limpiarTarea = () => {// Elimina la tarea Seleccionada
        dispatch({
            type: LIMPIAR_TAREA
        })
    };

    // ***** Fin CRUD ***** //

    return (
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas, 
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}  
        </tareaContext.Provider>
    );

}

export default TareaState;