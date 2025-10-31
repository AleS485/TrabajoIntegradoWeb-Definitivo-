function validacionFormulario(){
    const formulario = document.getElementById("formulario");
    const nombreUsuario = document.getElementById("Nombre").value.trim();
    const apellidoUsuario = document.getElementById("Apellido").value.trim();
    const telefonoUsuario = document.getElementById("Telefono").value.trim();
    const mailUsuario = document.getElementById("email").value.trim();
    
    const errorNombre = document.getElementById("errorNombre");
    const errorApellido = document.getElementById("errorApellido");
    const errorTelefono = document.getElementById("errorTelefono"); 
    const errorEmail = document.getElementById("errorEmail"); 
    const emailExpresionRegex = /^\S+@\S+\.\S+$/;

    let indicadorError = false;
    
    const mensajeValidacion = document.getElementById("contenedor-validacion");
    

    
    errorNombre.innerHTML = "";
    errorApellido.innerHTML = "";
    errorTelefono.innerHTML = "";
    errorEmail.innerHTML = "";


    

    if(nombreUsuario.length <= 3){

        errorNombre.style.marginTop = "5px";
        errorNombre.style.display = "block";
        errorNombre.style.color = "red";
        errorNombre.style.fontWeight = "bold";
        
        errorNombre.innerHTML = "El nombre no puede tener menos de 3 caracteres. <br>";
        
        indicadorError = true;
    }
    
    if(nombreUsuario.length == ""){

        errorNombre.style.fontWeight = "bold";
        errorNombre.style.marginTop = "5px";
        errorNombre.style.display = "block";
        errorNombre.style.color = "red";
        errorNombre.innerHTML += "El Campo Nombre no puede estar vacio.";
        indicadorError = true;


    }

    if(nombreUsuario.length >= 20){
        errorNombre.style.marginTop = "5px";
        errorNombre.style.display = "block";
        errorNombre.style.color = "red";
        errorNombre.style.fontWeight = "bold";
        
        errorNombre.innerHTML = "El nombre no puede tener mas de 20 caracteres.";
        
        indicadorError = true;
    }

    if(nombreUsuario.match(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]/g)){
        errorNombre.style.marginTop = "5px";
        errorNombre.style.display = "block";
        errorNombre.style.color = "red";
        errorNombre.style.fontWeight = "bold";
        
        errorNombre.innerHTML = "El nombre solo puede llevar letras.";
        
        indicadorError = true;

    }



    if(apellidoUsuario.length <= 3){
        errorApellido.style.fontWeight = "bold";
        errorApellido.style.marginTop = "5px";
        errorApellido.style.display = "block";
        errorApellido.style.color = "red";
        errorApellido.innerHTML += "El apellido no puede tener menos de 3 caracteres. <br>";
        indicadorError = true;

    }

    if(apellidoUsuario.length == ""){

        errorApellido.style.fontWeight = "bold";
        errorApellido.style.marginTop = "5px";
        errorApellido.style.display = "block";
        errorApellido.style.color = "red";
        errorApellido.innerHTML += "El Campo Apellido no puede estar vacio.";
        indicadorError = true;


    }

    if(apellidoUsuario.length >= 20){
        errorApellido.style.fontWeight = "bold";
        errorApellido.style.marginTop = "5px";
        errorApellido.style.display = "block";
        errorApellido.style.color = "red";
        errorApellido.innerHTML += "El apellido no puede tener mas de 20 caracteres.";
        indicadorError = true;

    }

    if(apellidoUsuario.match(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]/g)){
        errorApellido.style.fontWeight = "bold";
        errorApellido.style.marginTop = "5px";
        errorApellido.style.display = "block";
        errorApellido.style.color = "red";
        errorApellido.innerHTML += "El apellido solo puede llevar letras.";
        indicadorError = true;

    } 
    
    if(telefonoUsuario.length < 1){
        errorTelefono.style.fontWeight = "bold";
        errorTelefono.style.marginTop = "5px";
        errorTelefono.style.display = "block";
        errorTelefono.style.color = "red";
        errorTelefono.innerHTML += "El telefono debe tener mas de 1 numero. <br>";
        indicadorError = true;
    }
    
    if(telefonoUsuario.length == ""){

        errorTelefono.style.fontWeight = "bold";
        errorTelefono.style.marginTop = "5px";
        errorTelefono.style.display = "block";
        errorTelefono.style.color = "red";
        errorTelefono.innerHTML += "El Campo Telefono no puede estar vacio.";
        indicadorError = true;


    }

    if(telefonoUsuario.length > 12){
        errorTelefono.style.fontWeight = "bold";
        errorTelefono.style.marginTop = "5px";
        errorTelefono.style.display = "block";
        errorTelefono.style.color = "red";
        errorTelefono.innerHTML += "El telefono no debe tener mas de 12 numeros.";
        indicadorError = true;
        
        
    }   

    if(telefonoUsuario.match(/[^0-9+]/g)){
        errorTelefono.style.fontWeight = "bold";
        errorTelefono.style.marginTop = "5px";
        errorTelefono.style.display = "block";
        errorTelefono.style.color = "red";
        errorTelefono.innerHTML += "El telefono solo puede contener numeros y el simbolo '+'.";
        indicadorError = true;

    }


    if(mailUsuario.length == ""){

        errorEmail.style.fontWeight = "bold";
        errorEmail.style.marginTop = "5px";
        errorEmail.style.display = "block";
        errorEmail.style.color = "red";
        errorEmail.innerHTML += "El mail no puede ser vacio. <br>";
        indicadorError = true;


    }

    if(!mailUsuario.match(emailExpresionRegex)){

        errorEmail.style.fontWeight = "bold";
        errorEmail.style.marginTop = "5px";
        errorEmail.style.display = "block";
        errorEmail.style.color = "red";
        errorEmail.innerHTML += "Formato de mail invalido";
        indicadorError = true;

    }



    if(indicadorError == false){

        errorNombre.style.display = "none";
        errorApellido.style.display = "none";
        errorTelefono.style.display = "none";
        errorEmail.style.display = "none";

        // Agrego elemento p
        
        
        

        mensajeValidacion.innerHTML = "<button type=submit>Enviar</button>";
        const mensajeCorrecto = document.createElement("p");  
        mensajeCorrecto.classList.add("claseParaValidacion");
        mensajeValidacion.appendChild(mensajeCorrecto);
        mensajeCorrecto.innerHTML += "El formulario esta correcto <br>";
        mensajeCorrecto.innerHTML += "Nombre: " + nombreUsuario + "<br>";
        mensajeCorrecto.innerHTML += "Apellido: " + apellidoUsuario + "<br>";
        mensajeCorrecto.innerHTML += "Telefono: " + telefonoUsuario + "<br>";
        mensajeCorrecto.innerHTML += "Mail: " + mailUsuario + "<br>";
        mensajeCorrecto.innerHTML += "Te contactaremos en breve!";
        

        

    


    } 

    return false;



}















