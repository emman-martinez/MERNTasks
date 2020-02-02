import { OBTENER_TAREAS } from './../../types';

export default (state, action) => {
    switch (action.type) {
        case OBTENER_TAREAS:
            return {
                ...state,
                tareas: action.payload
            }
        default:
            return state;
    }
}