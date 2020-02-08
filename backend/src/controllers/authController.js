// ***** Auth: Funciones de Peticiones ***** //
const Usuario = require('./../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const authCtrl = {};

// *+*+*+*+* Inicio: POST => autenticarUsuario *+*+*+*+* //
authCtrl.autenticarUsuario = async(req, res) => {
    console.log('Desde authController: autenticarUsuario');
    console.log(req.body);

    // Revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }

    // Extraer Email y Password 
    const { email, password } = req.body;

    try {

        let usuario = await Usuario.findOne({ email }); // Revisar que el usuario este registrado
        if (!usuario) { // Si usuario no existe
            return res.status(400).json({ msg: 'El usuario no existe' });
        }

        const passCorrecto = await bcryptjs.compare(password, usuario.password) // Revisar el password
        if (!passCorrecto) { // Si password incorrecto
            return res.status(400).json({ msg: 'Password Incorrecto' });
        }

        const payload = { // Si todo es correcto Crear y firmar el JWT
            usuario: {
                id: usuario.id
            }
        };
        jwt.sign(payload, process.env.SECRETA, { // Firmar el JWT
            expiresIn: 3600 // 1 Hora
        }, (error, token) => {
            if (error) throw error;
            res.json({ token }); // Mensaje de confirmación  
        });

    } catch (error) {
        console.log(error);
    }

};
// *+*+*+*+* FIN: POST - CREATE => autenticarUsuario *+*+*+*+* //

module.exports = authCtrl;