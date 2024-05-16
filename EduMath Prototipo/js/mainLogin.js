var usuarios = [
    { correo: "usuario1@gmail.com", contraseña: "123" },
    { correo: "usuario2@gmail.com", contraseña: "123" },
    // Agrega más usuarios si es necesario
];

document.getElementById("loginButton").addEventListener("click", function() {
    var correo = document.getElementById("correo").value;
    var contraseña = document.getElementById("contraseña").value;

    // Verificar si el correo y la contraseña ingresados coinciden con algún usuario
    var usuarioValido = usuarios.find(function(usuario) {
        return usuario.correo === correo && usuario.contraseña === contraseña;
    });

    // Si se encuentra un usuario válido, redirigir a "asistencias.html", de lo contrario, mostrar un mensaje de error
    if (usuarioValido) {
        window.location.href = "EduMath Prototipo/html/Asistencias.html";
    } else {
        alert("Correo o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
});



/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (loginPass, loginEye) =>{
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye)
 
    iconEye.addEventListener('click', () =>{
       // Change password to text
       if(input.type === 'password'){
          // Switch to text
          input.type = 'text'
 
          // Icon change
          iconEye.classList.add('ri-eye-line')
          iconEye.classList.remove('ri-eye-off-line')
       } else{
          // Change to password
          input.type = 'password'
 
          // Icon change
          iconEye.classList.remove('ri-eye-line')
          iconEye.classList.add('ri-eye-off-line')
       }
    })
 }
 
 showHiddenPass('login-pass','login-eye')

 

