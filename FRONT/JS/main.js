//Importamos la función para ingresar un usuario 
import { agregarUsuario } from './API.js'

//Declaración de variables

const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const password = document.getElementById('password');

eventListeners();
function eventListeners() {

    formulario.addEventListener('submit', validarForm);
}

//Validación del formulario

function validarForm(e) {
    
    
    e.preventDefault();
    
    const nombreObtenido = nombre.value;
    const passwordObtenido = password.value;
    
    //Validación para el nombre
    if (nombreObtenido.length < 8) {

        nombre.classList.remove('valid');
        nombre.classList.add('error');

    } else {

        nombre.classList.add('valid');
        nombre.classList.remove('error');

    }
    
    //Validación para la contraseña (1 May, 1 Min y 1 número y por los menos 8 caracteres)
    if(passwordObtenido.length > 8) {
        let mayuscula = false;
        let minuscula = false;
        let numero = false;

        for (let i = 0; i < passwordObtenido.length; i++) {

            if (passwordObtenido.charCodeAt(i) >= 65 && passwordObtenido.charCodeAt(i) <= 90) {
                mayuscula = true;
            } else if (passwordObtenido.charCodeAt(i) >= 97 && passwordObtenido.charCodeAt(i) <= 122) {
                minuscula = true;
            } else if (passwordObtenido.charCodeAt(i) >= 48 && passwordObtenido.charCodeAt(i) <= 57) {
                numero = true;
            }

        }
        if (!mayuscula || !minuscula || !numero) {

            password.classList.add('error');
            password.classList.remove('valid');

        } else {

            password.classList.remove('error');
            password.classList.add('valid');

        }
    
    } else {

        password.classList.add('error');
        password.classList.remove('valid');
    }   

    if(password.classList.contains('error') || nombre.classList.contains('error')) {

        //Mostramos mensajes de error
        Swal.fire({
            title: 'Error :(!',
            text: 'Revisa una vez los datos del formulario',
            icon: 'error',
            confirmButtonText: 'Revisar'
          })
        return;
    } else {

        //Se pasa la validacion
        agregarUsuario(nombreObtenido, passwordObtenido);
        formulario.reset();
        password.classList.remove('valid');
        nombre.classList.remove('valid');

    }
}