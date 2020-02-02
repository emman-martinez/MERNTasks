import React, { Fragment, useContext, useEffect } from 'react';
import Tarea from './Tarea';
import proyectoContext from './../../context/proyectos/proyectoContext';
import tareaContext from './../../context/tareas/tareaContext';

const ListadoTareas = () => {

    // Obtener el state de proyectos y tareas
    const proyectosContext = useContext(proyectoContext);
    const tareasContext = useContext(tareaContext);

    // State de proyecto y Funcion de State
    const { proyecto } = proyectosContext;
    const { eliminarProyecto } = proyectosContext;

    // State de tarea y Funcion de State
    const { tareas } = tareasContext;
    const { obtenerTareas } = tareasContext;

    // Obtener tareas cuando carga el componente 
    useEffect(() => {
        obtenerTareas();
    }, []);

    // Si no hay proyecto Seleccionado
    if(!proyecto) return <h2>Selecciona un Proyecto</h2>;
    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    // Elimina un proyecto
    const onClickEliminar = (id) => {
        console.log('Eliminar Proyecto Id: ', id);
        // return null;
        eliminarProyecto(id);
    }

    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {
                    tareas.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    :   tareas.map(tarea => {
                                return(
                                    <Tarea
                                        key={tarea.proyectoId}
                                        tarea={tarea}
                                    />
                                );
                            }                            
                        )
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={() => {onClickEliminar(proyectoActual.id)}}
            >
                Eliminar Proyecto &times;
            </button>
        </Fragment>
    );
}

export default ListadoTareas;