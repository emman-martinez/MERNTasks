// Rutas para Proyectos
const express = require('express');
const router = express.Router();
const { crearProyecto } = require('./../controllers/proyectoController');
const auth = require('./../middleware/auth');
const { check } = require('express-validator');

// ***** Routes ***** //
router.route('/') // api/proyectos
    .post(auth, [
            check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
        ],
        crearProyecto); // Crear Proyectos

router.route('/') // api/proyectos
    .get(auth); // Obtiene Proyectos

router.route('/') // api/proyectos
    .put(); // Actualiza Proyectos

router.route('/') // api/proyectos
    .delete(); // Elimina Proyectos

module.exports = router;