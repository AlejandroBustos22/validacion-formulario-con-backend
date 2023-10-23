
const firebaseConfig = {
    apiKey: "AIzaSyDwuDLDOoWJ9L1rjPyR7wMqiOqBSjnBICM",
    authDomain: "datos-del-formulario-7abf0.firebaseapp.com",
    projectId: "datos-del-formulario-7abf0",
    storageBucket: "datos-del-formulario-7abf0.appspot.com",
    messagingSenderId: "331367469038",
    appId: "1:331367469038:web:ee8e499123901e0b6608ff",
    measurementId: "G-NZDE416DF0"
};

firebase.initializeApp(firebaseConfig)



const db = firebase.firestore();



document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault()

    // validar campo nombre

    let entradaNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')

    if (entradaNombre.value.trim() === '') {
        errorNombre.textContent = 'Ingrese un nombre valido'
        errorNombre.classList.add('error-message')
    } else {
        errorNombre.textContent = ''
        errorNombre.classList.remove('error-message')
    }


    // VALIDAR CORREO ELECTRONICO

    let entradacorreo = document.getElementById('email')
    let errorcorreo = document.getElementById('emailError')
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patrón de validación básico

    if (!emailPattern.test(entradacorreo.value)) {
        errorcorreo.textContent = 'Ingrese un nombre valido'
        errorcorreo.classList.add('error-message')
    } else {
        errorcorreo.textContent = ''
        errorcorreo.classList.remove('error-message')
    }


    // validar contraseña

    let entradaContra = document.getElementById('password')
    let errorContra = document.getElementById('passwordError')
    let contrasenaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;

    if (!contrasenaPattern.test(entradaContra.value)) {
        errorContra.textContent = 'Ingrese una constraseña que tenga mas de 8 caracteres, mayusculas, minusculas, caracteres especiales'
        errorContra.classList.add('error-message')
    } else {
        errorContra.textContent = ''
        errorContra.classList.remove('error-message')
    }

    // si todos los campos son validos enviar formularios 

    if (!errorContra.textContent && !errorNombre.textContent && !errorcorreo.textContent) {
        

        db.collection("users").add({
            nombre: entradaNombre.value,
            email: entradacorreo.value,
            password: entradaContra.value
        })
            .then((docRef) => {
                alert('El formulario se ha enviado con éxito', docRef.id);
                document.getElementById('formulario').reset();
            })
            .catch((error) => {
                alert(error);
            });





    }

})