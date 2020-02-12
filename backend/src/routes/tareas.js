// Rutas para Tareas
const express = require('express');
const router = express.Router();
const { crearTarea, obtenerTareas, actualizarTarea, eliminarTarea } = require('./../controllers/tareaController');
const auth = require('./../middleware/auth');
const { check } = require('express-validator');

// ***** Routes ***** //
router.route('/') // api/tareas
    .post(auth, [
            check('nombre', 'El nombre es obligatorio').not().isEmpty(),
            check('proyecto', 'El proyecto es obligatorio').not().isEmpty()
        ],
        crearTarea); // Crear Tareas

router.route('/') // api/tareas
    .get(auth, obtenerTareas); // Obtiene Tareas

router.route('/:id') // api/tareas
    .put(auth, actualizarTarea); // Actualiza Tareas vía ID

router.route('/:id') // api/tareas
    .delete(auth, eliminarTarea); // Elimina Tareas

module.exports = router;