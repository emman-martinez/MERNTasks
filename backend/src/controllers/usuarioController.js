// ***** Usuarios: Funciones de Peticiones ***** //
const usuariosCtrl = {};

const Usuario = require('./../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

// ***** POST - CREATE => crearUsuario ***** //
usuariosCtrl.crearUsuario = async(req, res) => {

    console.log('Desde usuarioController: crearUsuario');
    console.log(req.body);

    // Revisar si hay errores
    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() }); 
    }

    // Extraer Email y Password 
    const { email, password } = req.body;

    try {

        let usuario = await Usuario.findOne({ email }); // Revisar que el usuario registrado sea único

        if (usuario) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        usuario = new Usuario(req.body); // Crea el nuevo usuario

        const salt = await bcryptjs.genSalt(10); // Hashear el password
        usuario.password = await bcryptjs.hash(password, salt);

        await usuario.save(); // Guardar Usuario
        res.json({ msg: 'Usuario Creado Correctamente' }); // Mensaje de confirmación  

    } catch (error) {

        console.log(error);
        res.status(400).send('Hubo un Error');

    }

};

module.exports = usuariosCtrl;