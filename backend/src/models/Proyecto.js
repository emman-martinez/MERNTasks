/* Schema: Proyecto */
const { Schema, model } = require('mongoose');

const proyectoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    creador: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    creado: {
        type: Date,
        default: Date.now()
    }
}, {
    timestamps: true
});

module.exports = model('Proyecto', proyectoSchema);