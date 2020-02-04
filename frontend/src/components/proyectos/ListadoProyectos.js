import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from './../../context/proyectos/proyectoContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoProyectos = () => {

    // Obtener el state inicial de proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    // Obtener proyectos cuando carga el componente 
    useEffect(() => {
        obtenerProyectos();
    }, []);

    // Revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <p>No hay Proyectos, comienza creando uno</p>;

    return (
        <ul className="listado-proyectos">

            <TransitionGroup>
                {
                    proyectos.map(proyecto => {
                            return(
                                <CSSTransition
                                    key={proyecto.id}
                                    timeout={950} 
                                    classNames="proyecto"
                                >
                                    <Proyecto
                                        proyecto={proyecto}
                                    />
                                </CSSTransition>
                            );
                        }
                    )
                }
            </TransitionGroup>

        </ul>
    );
}

export default ListadoProyectos;