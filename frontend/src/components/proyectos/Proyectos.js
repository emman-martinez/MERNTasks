import React, { useContext, useEffect } from 'react';
import Sidebar from './../layout/Sidebar';
import Barra from './../layout/Barra';
import FormTarea from './../tareas/FormTarea';
import ListadoTareas from '../tareas/ListadoTareas';
import authContext from '../../context/autenticacion/authContext'; 

const Proyectos = () => {

    // Extraer la información de autenticación
    const authsContext = useContext(authContext);
    const { usuarioAutenticado } = authsContext; 

    useEffect(() => {
        usuarioAutenticado();
    }, []);

    return(
        <div className="contenedor-app">
            <aside>
                <Sidebar/>
            </aside>
            <div className="seccion-principal">
                <Barra/>
                <main>
                    <FormTarea/>
                    <div className="contenedor-tareas">
                        <ListadoTareas/>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Proyectos;