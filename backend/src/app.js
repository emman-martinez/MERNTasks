// ***** Creación de Servidor con ExpressJS ***** //
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000; // Puerto de la app
app.set('port', PORT); // Settings: Configurar Servidor: Puerto
app.use(express.json({ extended: true })); // Habilitar express.json

// Routes: urls que la aplicación puede visitar
const [usuarios] = [require('./routes/usuarios')];
app.use('/api/usuarios', usuarios);

module.exports = app; 