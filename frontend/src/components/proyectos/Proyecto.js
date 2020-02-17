import React, { useContext } from 'react';
import proyectoContext from './../../context/proyectos/proyectoContext';
import tareaContext from './../../context/tareas/tareaContext';

const Proyecto = (props) => {

    const { proyecto } = props;

    // Obtener el state de proyectos
    const proyectosContext = useContext(proyectoContext);
    // State de proyecto
    const { proyectoActual } = proyectosContext;

    // Obtener la función del context de tarea
    const tareasContext = useContext(tareaContext);
    const { obtenerTareas } = tareasContext;

    

    const seleccionarProyecto = (id) => {
        console.log('onClickProyecto');
        console.log('id: ', id);
        proyectoActual(id); // Fijar un proyecto actual
        obtenerTareas(id);
    };

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => seleccionarProyecto(proyecto._id)}
            > 
                {proyecto.nombre}
            </button> 
        </li>
    );
}

export default Proyecto;