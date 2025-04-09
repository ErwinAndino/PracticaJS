// Ejercicio 1: ingresar dos valores y sumarlos

let a=2;
let b=3;
let resultado = a + b;

console.log(`el resultado de la sume entre ${a} y ${b} es ${resultado}`);

// Ejercicio 2: Ingresar tres valores e indicar cual es el mayor y cual el menor.

let d=5;
let e=6;
let f=7;
let mayor;
let menor;

if (d > e) {
    mayor = d; // d es el mayor
    menor = e;
}
else {
    mayor = e; // e es el mayor
    menor = d;
}

if (mayor < f) {    
    mayor = f; // f es el mayor
}
if (menor > f) {
    menor = f; // f es el mayor
}

console .log(`entre los numeros ${d} ${e} ${f} el mayor es ${mayor} y el menor es ${menor}`);

// Ejercicio 3: Ingresar una palabra y mostrar: <PALABRA> tiene <n> letras.

let palabra = "javascript";
console.log(`${palabra} tiene ${palabra.length} letras`); // palabra.length devuelve la cantidad de letras de la palabra

// Ejercicio 4: Ingresar un número e indicar si es par.

let x = 9;
x1 = x % 2; //calcula el resto del numero
if (x1 == 0) {
    console.log(`${x} es un numero par`); // si el resto es 0, el numero es par
    
} else {
    console.log(`${x} es un numero impar`); // si el resto es distinto de 0, el numero es impar
}

// Ejercicio 5: Ingresar una palabra y un numero "n". Repetir la palabra "n" veces.

 let palabra2 = "repetir";
 let y = 5;

 for (let z=0; z != y; z++) { // el for empieza en z=0 y se repite mientras z != y
    console.log(palabra2);
    
 }
