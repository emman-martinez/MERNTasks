import React, { useContext } from 'react';
import proyectoContext from './../../context/proyectos/proyectoContext';

const Proyecto = (props) => {

    // Obtener el state de proyectos
    const proyectosContext = useContext(proyectoContext);
    // State de proyecto
    const { proyectoActual } = proyectosContext;

    const { proyecto } = props;

    const onClickProyecto = (id) => {
        console.log('onClickProyecto');
        console.log('id: ', id);
        proyectoActual(id);
    };

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => onClickProyecto(proyecto.id)}
            > 
                {proyecto.nombre}
            </button> 
        </li>
    );
}

export default Proyecto;