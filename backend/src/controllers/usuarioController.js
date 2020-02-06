// ***** Usuarios: Funciones de Peticiones ***** //
const usuariosCtrl = {};

const Usuario = require('./../models/Usuario');

// Función: POST - CREATE
usuariosCtrl.crearUsuario = async(req, res) => {
    console.log('Desde usuarioController: crearUsuario');
    console.log(req.body);
};

module.exports = usuariosCtrl;