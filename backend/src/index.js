// ***** Creación de Servidor con ExpressJS ***** //
const express = require('express');
require('dotenv').config();
require('colors');

const app = express(); // Crear el servidor
const PORT = process.env.PORT || 4000; // Puerto de la app
require('./db/database'); // Conexión a Base de Datos

app.use('/api/usuarios', require('./routes/usuarios'));// Importar rutas Usuarios

const main = async() => { // Arranca el Servidor
    await app.listen(PORT, () => {
        console.log('Server on Port:'.cyan, PORT);
    });
};

main();  