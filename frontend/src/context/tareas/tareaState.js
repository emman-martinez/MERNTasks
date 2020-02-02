import React, { useReducer } from 'react';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import { OBTENER_TAREAS } from './../../types';

const TareaState = (props) => {

    // State inicial
    const initialState = {
        tareas: [
            { proyectoId: 1, nombre: 'Elegir Plataforma', estado: true },
            { proyectoId: 2, nombre: 'Elegir Colores', estado: false },
            { proyectoId: 3, nombre: 'Elegir Plataformas de pago', estado: false },
            { proyectoId: 4, nombre: 'Elegir Hosting', estado: true },
            { proyectoId: 1, nombre: 'Elegir Plataforma', estado: true },
            { proyectoId: 2, nombre: 'Elegir Colores', estado: false },
            { proyectoId: 3, nombre: 'Elegir Plataformas de pago', estado: false },
            { proyectoId: 4, nombre: 'Elegir Plataforma', estado: true },
            { proyectoId: 1, nombre: 'Elegir Colores', estado: false },
            { proyectoId: 2, nombre: 'Elegir Plataformas de pago', estado: false },
            { proyectoId: 7, nombre: 'Elegir Plataforma', estado: true },
            { proyectoId: 5, nombre: 'Elegir Colores', estado: false },
            { proyectoId: 6, nombre: 'Elegir Plataformas de pago', estado: false },
        ],
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(tareaReducer, initialState);

    // ***** Inicio CRUD ***** //

    const obtenerTareas = () => {
        dispatch({
            type: OBTENER_TAREAS,
            payload: state.tareas
        })
    };

    // ***** Fin CRUD ***** //

    return (
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                obtenerTareas
            }}
        >
            {props.children} 
        </tareaContext.Provider>
    );

}

export default TareaState;