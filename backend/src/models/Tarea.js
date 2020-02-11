/* Schema: Tarea */
const { Schema, model } = require('mongoose');

const tareaSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    estado: {
        type: Boolean,
        default: false
    },
    creado: {
        type: Date,
        default: Date.now()
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: 'Proyecto'
    }
}, {
    timestamps: true
});

module.exports = model('Tarea', tareaSchema);