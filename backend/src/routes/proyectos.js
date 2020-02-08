// Rutas para Proyectos
const express = require('express');
const router = express.Router();
const { crearProyecto } = require('./../controllers/proyectoController');
// const { check } = require('express-validator');

// ***** Routes ***** //
router.route('/') // api/proyectos
    .post(crearProyecto); // Crear Proyectos

router.route('/') // api/proyectos
    .get(); // Obtiene Proyectos

router.route('/') // api/proyectos
    .put(); // Actualiza Proyectos

router.route('/') // api/proyectos
    .delete(); // Elimina Proyectos

module.exports = router;