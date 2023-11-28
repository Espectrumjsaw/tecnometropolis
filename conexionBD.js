
/* configuracion de la base de datos */
const firebaseConfig = {
    apiKey: "AIzaSyDsr6OsQNCVRZF9MfqnhhR9eJ8MBkgrx1c",
    authDomain: "tecnometropolis-inc.firebaseapp.com",
    databaseURL: "https://tecnometropolis-inc-default-rtdb.firebaseio.com",
    projectId: "tecnometropolis-inc",
    storageBucket: "tecnometropolis-inc.appspot.com",
    messagingSenderId: "440406805324",
    appId: "1:440406805324:web:2305e9a77b6ed1eaae9de9",
    measurementId: "G-PLQ1W74RTN"
};

/* iniciar la conexion */
firebase.initializeApp(firebaseConfig);

var formDeContactoDB = firebase.database().ref('contactos')

const formulario = document.getElementById("formularioContacto").addEventListener("submit", enviarDatos)

let obtenerValor = (id) => {
    return document.getElementById(id).value;
}

//Crear objeto
function enviarDatos(e) {
    e.preventDefault();
    let name = obtenerValor("nombre");
    let cel = obtenerValor("celular");
    let email = obtenerValor("correo");
    let comment = obtenerValor("comentarios");
    const btnEnviar = document.getElementById("btnEnviar");
    if (name !== "" && celular !== "" && email !== "") {
        guardarInformacion(name, cel, email, comment);
        alert("Información guardada con éxito")
        // const guardoInfo = document.getElementById('guardoInfo');
        // const toastBootstrap = bootstrap.Toast.getOrCreateInstance(guardoInfo)
        // btnEnviar.addEventListener('click', () => {
        //     toastBootstrap.show()
        // })
    }
    else {
        alert('Información incompleta, por favor registrar toda la información de Nombre Teléfono y Correo en los campos del formulario')
        // const sinGuardar = document.getElementById('sinGuardar');
        // const faltaInfo = bootstrap.Toast.getOrCreateInstance(sinGuardar)
        // btnEnviar.addEventListener('click', () => {
        //     faltaInfo.show()
        // })
    }
}

//push info en BD
const guardarInformacion = (name, cel, email, comment) => {
    let nuevoContacto = formDeContactoDB.push();

    nuevoContacto.set({
        nombre: name,
        celular: cel,
        correo: email,
        comentario: comment
    });
    document.getElementById("formularioContacto").reset();
}
