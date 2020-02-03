import React, { useContext, useState } from 'react';
import proyectoContext from './../../context/proyectos/proyectoContext';
import tareaContext from './../../context/tareas/tareaContext';

const FormTarea = () => {

    // Obtener el state si un proyecto esta activo : proyecto
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext);
    const { agregarTarea } = tareasContext;

    // State del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ''
    })

    // Extraer el nombre del proyecto
    const { nombre } = tarea;

    // Si no hay proyecto Seleccionado
    if(!proyecto) return null;
    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    // Leer los valores del formulario
    const handleChange = (e) => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        // Validar
        // Pasar la validación
        // Agregar la nueva tarea al state de tareas
        tarea.proyectoId = proyectoActual.id;
        tarea.estado = false;
        agregarTarea(tarea);
        // Reiniciar el form
    };

    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
    );
}


export default FormTarea;