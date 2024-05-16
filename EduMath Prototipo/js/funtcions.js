// FORMAS DE IMPRIMIR EN PANTALLA
// alert("HOLA SOY UN ALERT DESDE EL ARCHIVO EXTERNO DE JS");
// console.log("HOLA SOY UN MENSAJE DE CONSOLA");
//document.write("HOLA SOY LA INTERFAZ PRINCIPAL");
// Swal.fire("Hola soy una alerta de una librería");
// Swal.fire(
//     {
//         title: "The Internet?",
//         text: "That thing is still around?",
//         icon: "success",
//         showConfirmButton: false,
//         timer: 1500
//     }
//   );

// VARIABLES Y TIPO DE DATOS
const pi = 3.14; // decimal
var name = "Wilder Duarte"; // string
let edad = 32; // entero
let edad_string = "32"; // string
var bool = true; // false booleanos

//OPERADORES BÁSICOS + - / * %
var suma = 5-2;
console.log(suma);
console.log(edad_string + suma);
var one = 10;
var two = 20;
console.log(one+two);
console.log(one-two);
console.log(one*two);
console.log(one/two);
console.log(one%two);

//OPERADORES DE COMPARACIÓN
// < > >= <= <> 
//= Asignación
//== Comparación 5=="5"
//=== Comparación 5=="5"
//==== es una mentira del profesor
//OPERADORES LÓGICOS
// AND && OR ||

console.log("Mi nombre "+name+" tiene como edad: "+edad);

function load_page(){
    Swal.fire({
        imageUrl: "../img/WilderDuarte.png",
        imageAlt: "A tall image",
        showConfirmButton: false
    });
}

function send_info(){
    let name = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    if(name.length == 0 || last_name.length == 0){
        Swal.fire({
            title: "Campos Vacíos",
            text: "Alguno de los campos se encuentra vacío",
            icon: "error"
        });
        if(name.length==0){
            document.getElementById("name").style.border = "2px solid red"
        }
        if(last_name.length==0){
            document.getElementById("last_name").style.background = "red"
        }
    }else{
        document.getElementById("print").innerHTML = "<strong>"+name+" "+last_name+"</strong>";
    }
}


