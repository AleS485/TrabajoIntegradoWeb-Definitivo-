function validacionFormulario(){
    const errorApellido = document.getElementById("errorApellido");
    const nombreUsuario = document.getElementById("Nombre").value.trim();
    const apellidoUsuario = document.getElementById("Apellido").value.trim();
    const telefonoUsuario = document.getElementById("Telefono").value.trim();
    const mailUsuario = document.getElementById("email").value.trim();
    let mensajeError = document.getElementById("errorSubmit");

    mensajeError.style.display = "none";
    let indicadorError = false;
    let especificacionErrores = "";


    if(nombreUsuario.length <= 3 || nombreUsuario.length >= 30){
        especificacionErrores += "El nombre no puede tener menos de 3 caracteres. <br>";
        
        indicadorError = true;
    }
    
    if(nombreUsuario.match(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]/g)){
        especificacionErrores += "El nombre solo tiene que llevar letras. <br>";
        
        indicadorError = true;

    }

    if(apellidoUsuario.length <= 3 || apellidoUsuario.length >= 30){

        errorApellido.style.display = "block";
        errorApellido.style.color = "red";
        especificacionErrores += "El apellido no puede tener menos de 3 caracteres. <br>";
        indicadorError = true;

    }
    if(apellidoUsuario.match(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]/g)){

        especificacionErrores += "El apellido solo tiene que llevar letras. <br>";
        indicadorError = true;

    } 
    
    if(telefonoUsuario.length < 10 || telefonoUsuario.length > 15){

        especificacionErrores += "El telefono debe tener entre 10 y 15 caracteres. <br>";
        indicadorError = true;
    }   
    if(telefonoUsuario.match(/[^0-9+]/g)){

        especificacionErrores += "El telefono solo puede tener numeros y el simbolo '+'. <br>";
        indicadorError = true;  

    }


    if(mailUsuario.length <= 5){

        especificacionErrores += "El mail no puede ser menor o igual a 5 caracteres. <br>";
        
        indicadorError = true;


    }

    if(!mailUsuario.includes("@")){

        especificacionErrores += "El mail debe incluir el : '@'. <br>";
        
        indicadorError = true;

    }



    if(indicadorError == false){

        mensajeError.style.display = "block";
        mensajeError.innerHTML = "El formulario esta correcto";
        mensajeError.style.color = "green";
        mensajeError.style.fontWeight = "bold";


    } else{

        mensajeError.style.display = "block";
        mensajeError.style.color = "red";
        mensajeError.innerHTML = especificacionErrores;
        mensajeError.style.fontWeight = "bold";

    }


    return false;



}















