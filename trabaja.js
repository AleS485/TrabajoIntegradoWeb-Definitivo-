const nombre = document.getElementById('nombre');  
const apellido = document.getElementById('apellido');
const telefono = document.getElementById('telefono');
const correo = document.getElementById('correo');  
const formulario = document.getElementById('formulario'); 
const contador = document.getElementById('contador');
const botonEnviar = document.getElementById('enviar');

const form = document.getElementById('formulario');
formulario.addEventListener('submit', function(e) {  
    e.preventDefault();  
    let valid = true;  
    const telefonoExp = /^(?!15)(?!0)\d{6,10}$/;
    const apellidoExp = /^[a-zA-ZÀ-ÿ\s]+$/;
    const nombreExp = /^[a-zA-ZÀ-ÿ\s]+$/;
    const emailExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; 

    // Validación del nombre  
    if (nombre.value.trim() === '' || !nombreExp.test(nombre.value) || nombre.value.length > 30) {  
        document.getElementById('errorNombre').style.display = 'inline'; 
        nombre.value = ""; 
        valid = false;  
    } else {  
        document.getElementById('errorNombre').style.display = 'none';  
    }  

    // Validación del apellido  
    if (apellido.value.trim() === '' || !apellidoExp.test(apellido.value) || apellido.value.length > 30) {  
        document.getElementById('errorApellido').style.display = 'inline';  
        apellido.value = "";
        valid = false;  
    } else {  
        document.getElementById('errorApellido').style.display = 'none';  
    } 

    // Validación del teléfono
    if (!telefonoExp.test(telefono.value) || telefono.value.trim() === "" ) {  
        document.getElementById('errorTelefono').style.display = 'inline';  
        telefono.value = "";
        valid = false;  
    } else {  
        document.getElementById('errorTelefono').style.display = 'none';  
    }  
    
});
botonEnviar.addEventListener('click', function() {
    const descripcion = document.getElementById('descripcion').value;
    if (formulario.checkValidity()) {
        confirmarEnvio(nombre.value, apellido.value, telefono.value, descripcion, correo.value);
        formulario.reset();
        contador.textContent = `0/300`;
    } else {
        document.getElementById('errorSubmit').style.display = 'inline';
    }
});


function confirmarEnvio(nombre, apellido, telefono, descripcion, correo) {
    console.log("Nombre: " + nombre);
    console.log("Apellido: " + apellido);
    console.log("Teléfono: " + telefono);
    console.log("Descripción: " + descripcion);
    console.log("Correo: " + correo);
}

