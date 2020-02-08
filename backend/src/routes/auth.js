// Rutas para Autenticar Usuarios
const express = require('express');
const router = express.Router();
const { autenticarUsuario } = require('./../controllers/authController');
const { check } = require('express-validator');

// ***** Routes ***** //
router.route('/') // api/auth
    .post([
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'El password debe ser mínimo de 6 caracteres').isLength({ min: 6 })
    ], autenticarUsuario);

module.exports = router;