import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import clienteAxios from './../../config/axios';
import tokenAuth from './../../config/tokenAuth';
import {    REGISTRO_EXITOSO,
            REGISTRO_ERROR,
            OBTENER_USUARIO,
            LOGIN_EXITOSO,
            LOGIN_ERROR,
            CERRAR_SESION
        } from './../../types';

const AuthState = (props) => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null,
        cargando: true
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    /* ************************** FUNCIONES ************************** */

    // ********************** REGISTRAR USUARIO ********************** //
    const registrarUsuario = async (datos) => {

        try {

            const respuesta = await clienteAxios.post('/api/usuarios', datos); // API => usuarios: routes => usuariosController: crearUsuario
            console.log('registrarUsuario => respuesta: ', respuesta);
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data // Token 
            });

            // Obtener el Usuario
            usuarioAutenticado(); // API => auth: routes => authController: usuarioAutenticado

        } catch(error) {

            console.log(error.response.data.msg); 
            const { msg } = error.response.data;
            const alerta = {
                msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            });

        }

    }; 

    // Retorna el usuario autenticado
    const usuarioAutenticado = async () => { 
        const token = localStorage.getItem('token');
        console.log('token: ', token);
        if(token) {
            // TODO: Función para enviar el token por headers
            console.log('Llamado de función => tokenAuth');
            tokenAuth(token); // API => auth: routes => middleware: auth
        }

        try {
            const respuesta = await clienteAxios.get('/api/auth'); // API => auth: routes => authController: usuarioAutenticado
            console.log(respuesta);
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            });
        } catch (error) {
            console.log(error.response); 
            dispatch({
                type: LOGIN_ERROR
            });
        }
    }

    // Cuando el usuario inicia Sesión
    const iniciarSesion = async (datos) => {
        try {

            const respuesta = await clienteAxios.post('/api/auth', datos);
            console.log(respuesta);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            });
            // Obtener el Usuario
            usuarioAutenticado(); // API => auth: routes => authController: usuarioAutenticado

        } catch (error) {

            //console.log(error.response);
            console.log(error.response.data.msg); 
            const { msg } = error.response.data;
            const alerta = {
                msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            });
            
        }
    }; 

    // Cierra la sesión del usuario
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        });
    }
    
    /* ************************** FUNCIONES ************************** */
    return (
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                cargando: state.cargando,
                registrarUsuario ,
                usuarioAutenticado,
                iniciarSesion,
                cerrarSesion
            }}
        >
            {props.children} 
        </authContext.Provider>
    );
};

export default AuthState;