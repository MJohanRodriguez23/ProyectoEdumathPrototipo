document.getElementById("formRegistro").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    var nombre = document.getElementById("nombre").value;
    var codigo = document.getElementById("codigo").value;

    // Verificar que se haya ingresado un nombre y un código
    if (nombre && codigo) {
        // Ocultar el formulario de registro
        document.querySelector(".registro").style.display = "none";

        // Mostrar el contenido del juego
        document.querySelector(".container").style.display = "block";

        // Iniciar la prueba
        comenzar();
    } else {
        alert("Por favor, ingresa tu nombre y código.");
    }
});

var num1, num2, respuesta, contadorPreguntas = 0, respuestasCorrectas = 0, respuestasIncorrectas = 0;
var listaRespuestas = [];

// Obtener referencias a los elementos del DOM
var txt_operacion = document.getElementById("operacion");
var txt_msj = document.getElementById("msj");
var txt_resultado = document.getElementById("resultado");
var btn_mostrarRespuestas = document.getElementById("btn_mostrarRespuestas");
var btn_irTaller = document.getElementById("btn_irTaller");

// Función para comenzar la prueba
function comenzar(){
    // Reiniciar los elementos del DOM
    txt_resultado.innerHTML = "?";
    txt_msj.innerHTML = "";

    // Incrementar contador de preguntas
    contadorPreguntas++;

    // Verificar si se han realizado todas las preguntas
    if(contadorPreguntas > 10){
        // Calcular el promedio de respuestas correctas
        var promedioCorrectas = respuestasCorrectas / 10 * 100;

        // Mostrar retroalimentación o resultado de la prueba
        if (promedioCorrectas >= 60) {
            alert("Felicidades, has aprobado la prueba sin necesidad de retroalimentación.");
        } else {
            alert("Has obtenido un promedio de respuestas correctas del " + promedioCorrectas.toFixed(2) + "%. Te daremos retroalimentación en forma de taller.");
            mostrarResultados();
        }
        
        return; // Salir de la función si ya se han realizado todas las preguntas
    }

    // Generar la multiplicación - Números aleatorios entre 1 y 10
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    respuesta = num1 * num2;

    // Asignar los números para que se muestren en la multiplicación
    txt_operacion.innerHTML = num1 + " x " + num2 + " = ";

    // Generar opciones de respuesta
    var opciones = generarOpciones(respuesta);

    // Asignar opciones a los elementos del DOM
    txt_resultado.innerHTML = "?";
    for (var i = 0; i < opciones.length; i++) {
        document.getElementById("op" + (i + 1)).innerHTML = opciones[i];
    }
}

// Función para generar opciones de respuesta
function generarOpciones(respuestaCorrecta) {
    var opciones = [];
    opciones.push(respuestaCorrecta);

    while (opciones.length < 3) {
        var opcion = respuestaCorrecta + Math.floor(Math.random() * 5) - 2;
        // Evitar opciones duplicadas o iguales a la respuesta correcta
        if (opciones.indexOf(opcion) === -1 && opcion !== respuestaCorrecta) {
            opciones.push(opcion);
        }
    }

    return shuffleArray(opciones); // Mezclar las opciones para que no siempre estén en el mismo orden
}

// Función para mezclar un array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// Función para controlar la respuesta seleccionada por el usuario
function controlarRespuesta(opcionElegida){    
    // Mostrar la respuesta seleccionada por el usuario
    txt_resultado.innerHTML = opcionElegida.innerHTML;

    // Verificar si la respuesta es correcta
    if(respuesta == opcionElegida.innerHTML){
        txt_msj.innerHTML = "¡EXCELENTE!";
        txt_msj.style.color="green";
        respuestasCorrectas++;
        listaRespuestas.push("Pregunta " + contadorPreguntas + ": Correcta");
    } else {
        txt_msj.innerHTML = "¡INTENTA DE NUEVO!";
        txt_msj.style.color="red";
        respuestasIncorrectas++;
        listaRespuestas.push("Pregunta " + contadorPreguntas + ": Incorrecta");
    }

    // Verificar si se han realizado todas las preguntas
    if(contadorPreguntas >= 10){
        // Calcular el promedio de respuestas correctas
        var promedioCorrectas = respuestasCorrectas / 10 * 100;

        // Mostrar retroalimentación o resultado de la prueba
        if (promedioCorrectas >= 60) {
            alert("Felicidades, has aprobado la prueba sin necesidad de retroalimentación.");
            mostrarResultados();
        } else {
            alert("Has obtenido un promedio de respuestas correctas del " + promedioCorrectas.toFixed(2) + "%. Te daremos retroalimentación en forma de taller.");
            mostrarResultados();
        }
    } else {
        setTimeout(comenzar, 1000); // Iniciar la siguiente pregunta después de 1 segundo
    }
}

// Función para mostrar los resultados finales
function mostrarResultados() {
    // Mostrar lista de respuestas
    var listaRespuestasHTML = document.getElementById("listaRespuestas");
    listaRespuestasHTML.innerHTML = ""; // Limpiar lista de respuestas

    listaRespuestas.forEach(function (respuesta) {
        var li = document.createElement("li");
        li.textContent = respuesta;
        listaRespuestasHTML.appendChild(li);
    });

    // Calcular el promedio de respuestas correctas
    var promedioCorrectas = (respuestasCorrectas / 10) * 100;

    // Mostrar el promedio
    var promedioElement = document.getElementById("promedio");
    promedioElement.textContent = "Tu promedio de respuestas correctas es: " + promedioCorrectas.toFixed(2) + "%";

    // Mostrar la retroalimentación o resultado de la prueba
    var retroalimentacionElement = document.getElementById("retroalimentacion");
    var btnMostrarRespuestas = document.getElementById("btn_mostrarRespuestas");
    var btnIrTaller = document.getElementById("btn_irTaller");

    if (promedioCorrectas >= 60) {
        retroalimentacionElement.textContent = "¡Felicidades, has aprobado la prueba sin necesidad de retroalimentación!";
        btnMostrarRespuestas.style.display = "block";
    } else {
        retroalimentacionElement.textContent = "Has obtenido un promedio de respuestas correctas del " + promedioCorrectas.toFixed(2) + "%. Te daremos retroalimentación en forma de taller.";
        btnIrTaller.style.display = "block";
    }

    // Mostrar el div de resultados finales
    var resultadoFinalDiv = document.getElementById("resultadoFinal");
    resultadoFinalDiv.style.display = "block";
}

// Evento click para el botón "Ir al Taller"
btn_irTaller.addEventListener("click", function () {
    // Aquí puedes agregar el código para redirigir al usuario al taller
    alert("¡Bienvenido al taller de retroalimentación!");
});

// Evento click para el botón "Mostrar Respuestas"
btn_mostrarRespuestas.addEventListener("click", function () {
    mostrarResultados();
});



document.getElementById("formRegistro").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    var nombre = document.getElementById("nombre").value;
    var codigo = document.getElementById("codigo").value;

    // Verificar que se haya ingresado un nombre y un código
    if (nombre && codigo) {
        // Almacenar el registro de asistencia en localStorage
        var asistencia = {
            nombre: nombre,
            codigo: codigo,
            fecha: new Date().toLocaleString() // Fecha y hora actual
        };
        // Obtener registros de asistencias existentes
        var asistencias = JSON.parse(localStorage.getItem('asistencias')) || [];
        // Agregar el nuevo registro a la lista
        asistencias.push(asistencia);
        // Guardar en localStorage
        localStorage.setItem('asistencias', JSON.stringify(asistencias));

        // Ocultar el formulario de registro
        document.querySelector(".registro").style.display = "none";

        // Mostrar el contenido del juego
        document.querySelector(".container").style.display = "block";

        // Iniciar la prueba
        comenzar();
    } else {
        alert("Por favor, ingresa tu nombre y código.");
    }
});

// Función para mostrar los registros de asistencia almacenados en localStorage
function mostrarAsistencias() {
    var asistencias = JSON.parse(localStorage.getItem('asistencias')) || [];
    var listaAsistenciasHTML = document.getElementById("listaAsistencias");
    listaAsistenciasHTML.innerHTML = ""; // Limpiar lista de asistencias

    asistencias.forEach(function (asistencia) {
        var li = document.createElement("li");
        li.textContent = "Nombre: " + asistencia.nombre + " - Código: " + asistencia.codigo + " - Fecha: " + asistencia.fecha;
        listaAsistenciasHTML.appendChild(li);
    });
}

// Llamar a la función para mostrar las asistencias almacenadas al cargar la página
mostrarAsistencias();


// Iniciar la prueba al cargar la página
comenzar();
