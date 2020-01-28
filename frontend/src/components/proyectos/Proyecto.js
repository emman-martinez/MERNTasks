import React from 'react';

const Proyecto = (props) => {

    const { proyecto } = props;

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
            >
                {proyecto.nombre}
            </button> 
        </li>
    );
}

export default Proyecto;