// Rutas para crear Usuarios
const express = require('express');
const router = express.Router();
const { crearUsuario } = require('./../controllers/usuarioController');
const { check } = require('express-validator');

// ***** Routes ***** //
router.route('/') // api/usuarios
    .post([
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'El password debe ser mínimo de 6 caracteres' ).isLength({ min: 6 })
    ], crearUsuario);

module.exports = router;