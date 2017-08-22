// A $( document ).ready() block.
$( document ).ready(function() {
   /*traer usuarios para comparar de una*/

    $( "#btn_crear" ).click(function() {
        guardarUsuario();
    });

});
    function guardarUsuario(){
    var nombre = document.getElementById('nombre').value;
    var lastName = document.getElementById('lastName').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    if (nombre == "" || lastName == "" || phone == "" || email == "") {
        alert("escribe todos los datos por favor");
    }
    else {
        var usuario = {nombre: nombre, lastName: lastName, phone: phone, email: email};
        var datos = JSON.parse(localStorage.getItem("usuario"));
        if (datos == null) {
            var arreglo = [];
            arreglo.push(usuario);
            localStorage.setItem("usuario", JSON.stringify(arreglo));
            location.href = "index.html";
        }
        else {
            var usernamerepetido = false;
            for (var i = 0; i < datos.length; i++) {
                if (usuario.correo == datos[i].correo) {
                    usernamerepetido = true;
                }
            }
        if (usernamerepetido) {
                if (usernamerepetido == true) {
                   alert("Ese username ya esta reservado para un usuario");
                }
            }
            else {
                datos.push(usuario);
                localStorage.setItem("usuario", JSON.stringify(datos));
            }
        }
    }
}
