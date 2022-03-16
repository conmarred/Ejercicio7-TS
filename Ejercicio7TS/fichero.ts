//Apartado 1
let apartado1: string = 'Apartado 1'
console.log(apartado1)
let cabeceraH1 = document.createElement('H1');
cabeceraH1.textContent = apartado1
document.body.appendChild(cabeceraH1);

//Ejercicio 1
function calculaNota(p1: number, p2: number, p3: number, final: number, trabajo: number){
    let promedio = (p1+p2+p3)/3
    let solucion = (promedio*0.55)+(final*0.3)+(trabajo*0.15)
    return solucion
}

//Imprimir ejercicio
let resultado: number = calculaNota(8, 9, 5, 6, 7);
console.log(resultado)
let ej1: string = 'La calificación final de la materia es: ' + resultado;
let parrafo1 = document.createElement('P');
parrafo1.textContent = ej1
document.body.appendChild(parrafo1);

//Apartado 2
let apartado2: string = 'Apartado 2'
console.log(apartado2)
let cabecera2H1 = document.createElement('H1');
cabecera2H1.textContent = apartado2
document.body.appendChild(cabecera2H1);

//Array con varios nombres de videojuegos

var videojuegos = ["Pokemon", "Mario", "Animal Crossing"];

function imprimeJuegos(){
    let juegos : string[] = ["Pokemon", "Mario", "Animal Crossing"]
    let resultado : string[] = []
    for(let item of juegos){
        if(item !== "Mario"){
            resultado.push(item)
        }
    }
    return resultado
}

//Imprimir ejercicio
let juegos : string[] = ["Pokemon", "Mario", "Animal Crossing"]
let lista: string = 'La lista incial es: ' + juegos;
let parrafop = document.createElement('P');
parrafop.textContent = lista
document.body.appendChild(parrafop);

let resultado2: string[] = imprimeJuegos();
console.log(resultado2)
let ej2: string = 'La lista de los juegos sin Mario es: ' + resultado2;
let parrafo2 = document.createElement('P');
parrafo2.textContent = ej2
document.body.appendChild(parrafo2);

//Apartado 3
let apartado3: string = 'Apartado 3'
console.log(apartado3)
let cabecera3H1 = document.createElement('H1');
cabecera3H1.textContent = apartado3
document.body.appendChild(cabecera3H1);

//Factorial dado un numero
function factorial(n1: number){
    let r = 1;
    for(let i = n1; i>0; i--){
        r *= i;
    }
    return r
}

//Imprimir ejercicio
let resultado3: number = factorial(7);
console.log(resultado3)
let ej3: string = 'El factorial del numero 7 es: ' + resultado3;
let parrafo3 = document.createElement('P');
parrafo3.textContent = ej3
document.body.appendChild(parrafo3);