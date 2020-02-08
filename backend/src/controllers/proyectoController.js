// ***** Proyectos: Funciones de Peticiones ***** //
const Proyecto = require('./../models/Proyecto');

const proyectosCtrl = {};

// *+*+*+*+* Inicio: POST - CREATE => crearProyecto *+*+*+*+* //
proyectosCtrl.crearProyecto = async(req, res) => {
    console.log('Desde proyectoController: crearProyecto');
    console.log(req.body);

    try {

        const proyecto = new Proyecto(req.body); // Crear un nuevo proyecto
        proyecto.save();
        res.json(proyecto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};
// *+*+*+*+* FIN: POST - CREATE => crearProyecto *+*+*+*+* //

module.exports = proyectosCtrl;