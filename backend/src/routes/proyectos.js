// Rutas para Proyectos
const express = require('express');
const router = express.Router();
const { crearProyecto, obtenerProyectos, actualizarProyecto, eliminarProyecto } = require('./../controllers/proyectoController');
const auth = require('./../middleware/auth');
const { check } = require('express-validator');

// ***** Routes ***** //
router.route('/') // api/proyectos
    .post(auth, [
            check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
        ],
        crearProyecto); // Crear Proyectos

router.route('/') // api/proyectos
    .get(auth, obtenerProyectos); // Obtiene Proyectos

router.route('/:id') // api/proyectos
    .put(auth, [
            check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
        ],
        actualizarProyecto); // Actualiza Proyectos vía ID

router.route('/:id') // api/proyectos
    .delete(auth, eliminarProyecto); // Elimina Proyecto

module.exports = router;