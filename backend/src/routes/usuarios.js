// Rutas para crear Usuarios
const express = require('express');
const router = express.Router();

const { crearUsuario } = require('./../controllers/usuarioController');

// ***** Routes ***** //
router.route('/') // api/usuarios
    .post(crearUsuario);

module.exports = router;