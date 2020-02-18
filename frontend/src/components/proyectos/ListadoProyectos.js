import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import alertaContext from './../../context/alertas/alertaContext';
import proyectoContext from './../../context/proyectos/proyectoContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoProyectos = () => {

    // Obtener el state inicial de proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, mensaje, obtenerProyectos } = proyectosContext;

    const alertasContext = useContext(alertaContext);
    const { alerta, mostrarAlerta } = alertasContext;

    // Obtener proyectos cuando carga el componente 
    useEffect(() => {

        //  Si hay un error
        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        obtenerProyectos();
        // eslint-disable-next-line
    }, [mensaje]); 

    // Revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <p>No hay Proyectos, comienza creando uno</p>;

    return (
        <ul className="listado-proyectos">
            { alerta ? (<div className={`alerta ${alerta.categoria}`}>{ alerta.msg }</div>) : null }
            <TransitionGroup>
                {
                    proyectos.map(proyecto => {
                            return(
                                <CSSTransition
                                    key={proyecto._id}
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