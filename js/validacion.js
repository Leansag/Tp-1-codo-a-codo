(function(){
   
    var formulario = document.getElementsByName('formulario')[0],
        boton = document.getElementById('btn');

    var validarNombre = function(e){
        if (formulario.nombre.value == 0){
            alert("Completa el campo nombre");
            e.preventDefault();
            
        }
    };

    var validarApellido = function(e){
        if (formulario.apellido.value == 0){
            alert("Completa el campo Apellido");
            e.preventDefault();
        }    
    };
    
    var validarMail = function(e){
        if (formulario.mail.value == 0){
            alert("Completa el campo Mail");
            e.preventDefault();
        }    
    };

    var validar = function(e){
        validarNombre(e);
        validarApellido(e);
        validarMail(e);
    };
    formulario.addEventListener("submit", validar);
}())