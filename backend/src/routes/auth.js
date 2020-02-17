// Rutas para Autenticar Usuarios
const express = require('express');
const router = express.Router();
const { autenticarUsuario, usuarioAutenticado } = require('./../controllers/authController');
// const { check } = require('express-validator');
const auth = require('./../middleware/auth');

// ***** Routes: Iniciar Sesión ***** //
// Iniciar Sesión //
router.route('/') // api/auth
    .post(autenticarUsuario);

/*
router.route('/') // api/auth
    .post([
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'El password debe ser mínimo de 6 caracteres').isLength({ min: 6 })
    ], autenticarUsuario);
*/

// Obtiene el usuario autenticado //
router.route('/')
    .get(auth, usuarioAutenticado);

module.exports = router;