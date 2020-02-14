// ***** Creación de Servidor con ExpressJS ***** //
const express = require('express');
const app = express();
const cors = require('cors'); // Permite la comunicación entre 2 servidores
const PORT = process.env.PORT || 4000; // Puerto de la app

app.use(cors()); // Habilitando y/o Implementando cors 
app.set('port', PORT); // Settings: Configurar Servidor: Puerto
app.use(express.json({ extended: true })); // Habilitar express.json

// Routes: urls que la aplicación puede visitar
const [
    usuarios,
    auth,
    proyectos,
    tareas
] = [
    require('./routes/usuarios'),
    require('./routes/auth'),
    require('./routes/proyectos'),
    require('./routes/tareas')
];

app.use('/api/usuarios', usuarios);
app.use('/api/auth', auth);
app.use('/api/proyectos', proyectos);
app.use('/api/tareas', tareas);

module.exports = app;