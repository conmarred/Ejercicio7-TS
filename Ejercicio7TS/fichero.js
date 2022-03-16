//Apartado 1
var apartado1 = 'Apartado 1';
console.log(apartado1);
var cabeceraH1 = document.createElement('H1');
cabeceraH1.textContent = apartado1;
document.body.appendChild(cabeceraH1);
//Ejercicio 1
function calculaNota(p1, p2, p3, final, trabajo) {
    var promedio = (p1 + p2 + p3) / 3;
    var solucion = (promedio * 0.55) + (final * 0.3) + (trabajo * 0.15);
    return solucion;
}
//Imprimir ejercicio
var p1 = "Las clificaciones son: Parical 1: 8, Parcial 2: 9, Parcial 3: 5, Examen final: 6, Trabajo final: 7";
var parrafo11 = document.createElement('P');
parrafo11.textContent = p1;
document.body.appendChild(parrafo11);
var resultado = calculaNota(8, 9, 5, 6, 7);
console.log(resultado);
var ej1 = 'La calificación final de la materia es: ' + resultado;
var parrafo1 = document.createElement('P');
parrafo1.textContent = ej1;
document.body.appendChild(parrafo1);
//Apartado 2
var apartado2 = 'Apartado 2';
console.log(apartado2);
var cabecera2H1 = document.createElement('H1');
cabecera2H1.textContent = apartado2;
document.body.appendChild(cabecera2H1);
//Array con varios nombres de videojuegos
var videojuegos = ["Pokemon", "Mario", "Animal Crossing"];
function imprimeJuegos() {
    var juegos = ["Pokemon", "Mario Bros", "Animal Crossing", "Mario Kart", "Nintendogs"];
    var resultado = [];
    for (var _i = 0, juegos_1 = juegos; _i < juegos_1.length; _i++) {
        var item = juegos_1[_i];
        if (!item.includes("Mario")) {
            resultado.push(item);
        }
    }
    return resultado;
}
//Imprimir ejercicio
var juegos = ["Pokemon", "Mario Bros", "Animal Crossing", "Mario Kart", "Nintendogs"];
var lista = 'La lista incial es: ' + juegos;
var parrafop = document.createElement('P');
parrafop.textContent = lista;
document.body.appendChild(parrafop);
var resultado2 = imprimeJuegos();
console.log(resultado2);
var ej2 = 'La lista de los juegos sin Mario es: ' + resultado2;
var parrafo2 = document.createElement('P');
parrafo2.textContent = ej2;
document.body.appendChild(parrafo2);
//Apartado 3
var apartado3 = 'Apartado 3';
console.log(apartado3);
var cabecera3H1 = document.createElement('H1');
cabecera3H1.textContent = apartado3;
document.body.appendChild(cabecera3H1);
//Factorial dado un numero
function factorial(n1) {
    var r = 1;
    for (var i = n1; i > 0; i--) {
        r *= i;
    }
    return r;
}
//Imprimir ejercicio
var resultado3 = factorial(7);
console.log(resultado3);
var ej3 = 'El factorial del numero 7 es: ' + resultado3;
var parrafo3 = document.createElement('P');
parrafo3.textContent = ej3;
document.body.appendChild(parrafo3);
