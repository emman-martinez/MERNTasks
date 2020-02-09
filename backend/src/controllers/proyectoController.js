// ***** Proyectos: Funciones de Peticiones ***** //
const Proyecto = require('./../models/Proyecto');
const { validationResult } = require('express-validator');

const proyectosCtrl = {};

// *+*+*+*+* Inicio: POST - CREATE => crearProyecto *+*+*+*+* //
proyectosCtrl.crearProyecto = async(req, res) => {
    console.log('Desde proyectoController: crearProyecto');
    console.log(req.body);

    // Revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }

    try {

        const proyecto = new Proyecto(req.body); // Crear un nuevo proyecto
        proyecto.creador = req.usuario.id; // Guardar el creador vía JWT
        proyecto.save(); // Guardamos el Proyecto
        res.json(proyecto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};
// *+*+*+*+* FIN: POST - CREATE => crearProyecto *+*+*+*+* //

module.exports = proyectosCtrl;