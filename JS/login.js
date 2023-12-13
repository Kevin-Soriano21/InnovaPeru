// Supongamos que estas son las credenciales correctas
var correctUsername = "admin";
var correctPassword = "admin";

$(document).ready(function () {
    $(".log-btn").click(function () {
        var username = $("#UserName").val();
        var password = $("#Password").val();

        if(username === "" || password === "") {
            // Si los campos están vacíos, mostramos un mensaje de error
            alert("Por favor, rellena todos los campos requeridos.");
        } else if(username === correctUsername && password === correctPassword) {
            // Si las credenciales son correctas, removemos la clase 'wrong-entry' si existe
            $(".log-status").removeClass("wrong-entry");
            $(".alert").fadeOut(500);
            //Redirigimos a la pagina principal
            window.location.href = "index.html";
        } else {
            // Si las credenciales son incorrectas, mostramos el mensaje de error
            $(".log-status").addClass("wrong-entry");
            $(".alert").fadeIn(500);
            setTimeout(function() {
                $('.alert').fadeOut(1500);
            }, 3000);
        }
    });
    
    $(".form-control").keypress(function () {
        $(".log-status").removeClass("wrong-entry");
    });

    // Agrega esto a tu código
    $("#logout").click(function (event) {
        event.preventDefault();
        window.close();
    });
    
});
