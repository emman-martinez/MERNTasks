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
// *+*+*+*+* GET - READ => obtenerProyectos *+*+*+*+* //
proyectosCtrl.obtenerProyectos = async(req, res) => {
    console.log('Desde proyectoController: obtenerProyectos');
    console.log(req.body);

    try {
        console.log(req.usuario);
        const { id } = req.usuario;
        const proyectos = await Proyecto.find({ creador: id }).sort({ createdAt: -1 });
        res.json({ proyectos });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hubo un Error' });
    }
};

// *+*+*+*+* PUT - UPDATE => actualizarProyecto *+*+*+*+* //
proyectosCtrl.actualizarProyecto = async(req, res) => {
    console.log('Desde proyectoController: actualizarProyecto');
    console.log(req.body);

    // Revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }

    const { nombre } = req.body; // Extraer la información del proyecto
    const nuevoProyecto = {};

    if (nombre) {
        nuevoProyecto.nombre = nombre;
    }

    try {

        // console.log(req.params.id);
        let proyecto = await Proyecto.findById(req.params.id); // Revisar el ID

        if (!proyecto) { // Si el proyecto existe o no
            return res.status(404).json({ msg: 'Proyecto no encontrado' });
        }

        if (proyecto.creador.toString() !== req.usuario.id) { // Verificar el creador del proyecto
            return res.status(401).json({ msg: 'No Autorizado' });
        }

        // Actualizar
        proyecto = await Proyecto.findByIdAndUpdate({ _id: req.params.id }, { $set: nuevoProyecto }, { new: true });
        res.json({ proyecto });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el Servidor' });
    }
};

// *+*+*+*+* DELETE - DELETE => eliminarProyecto *+*+*+*+* //
proyectosCtrl.eliminarProyecto = async(req, res) => {
    console.log('Desde proyectoController: eliminarProyecto');
    console.log(req.body);

    try {
        let proyecto = await Proyecto.findById(req.params.id); // Revisar el ID

        if (!proyecto) { // Si el proyecto existe o no
            return res.status(404).json({ msg: 'Proyecto no encontrado' });
        }

        if (proyecto.creador.toString() !== req.usuario.id) { // Verificar el creador del proyecto
            return res.status(401).json({ msg: 'No Autorizado' });
        }

        await Proyecto.findOneAndRemove({ _id: req.params.id }); // Eliminar el Proyecto
        res.json({ msg: 'Proyecto Eliminado' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el Servidor' });
    }
};

module.exports = proyectosCtrl;