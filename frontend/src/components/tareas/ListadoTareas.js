import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from './../../context/proyectos/proyectoContext';
import tareaContext from './../../context/tareas/tareaContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoTareas = () => {

    // Obtener el state de proyectos
    const proyectosContext = useContext(proyectoContext);
    // State de proyecto y Funcion de State
    const { proyecto } = proyectosContext;
    const { eliminarProyecto } = proyectosContext;

    // Obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext);
    const { tareasproyecto } = tareasContext;

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
                    tareasproyecto.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    :   
                        <TransitionGroup>
                            {
                                tareasproyecto.map(tarea => {
                                        return(
                                            <CSSTransition
                                                key={tarea.id} 
                                                timeout={200}
                                                classNames="tarea"
                                            >
                                                <Tarea
                                                    tarea={tarea}
                                                />
                                            </CSSTransition>
                                        );
                                    }                            
                                )
                            }
                        </TransitionGroup>
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