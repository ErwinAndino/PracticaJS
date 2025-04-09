// Ejercicio 1: ingresar dos valores y sumarlos

let a=2;
let b=3;
let resultado = a + b;

console.log(`el resultado de la suma entre ${a} y ${b} es ${resultado}`);

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
 console.log(`a continuacion se repetira la palabra ${palabra2} ${y} veces:`)

 for (let i=0; i != y; i++) { // el for empieza en z=0 y se repite mientras z != y
    console.log(palabra2);
    
 }

// Ejercicio 6: Ingresar dos valores enteros y enumerar los elementos que los separan.

let g=6
let h=12
console.log(`los numeros que separan ${g} y ${h} son:`);
for (let i=g+1; i<h; i++) { // el for empieza en g+1 y se repite mientras i<h
    console.log(i); 
}

 // Ejercicio 7: Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos.

 let j=4
 let k=16
 console.log(`los numeros multiplos de 3 entre ${j} y ${k} son:`);
 for (let i=j+1; i<k; i++) {
     if (i % 3 == 0) { // si el resto de i/3 es 0, entonces i es multiplo de 3
         console.log(i); 
     }
   
 }

// Ejercicio 8: Mostrar los multiplos de 2 y 5 menores a 100.

console.log("los multiplos de 2 y 5 menores a 100 son:")
for (let i=1; i<100; i++) {
    if (i % 5 == 0) {  
     
     if (i % 2 == 0){
          console.log(i)
      }
    }
}
 
// Ejercicio 9: Obtener la suma de los elementos de un array.

let lista = [1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(`para una lista con los elementos ${lista}`)
let sumalista = 0
for (i=0; i < lista.length; i++){
    sumalista = sumalista + lista[i]
}
console.log(`la suma de sus elementos es igual a ${sumalista}`)

// Ejercicio 10: Sumar solo los elementos pares de un array.

sumalista = 0
for (i=0; i < lista.length; i++){
    if (lista[i] % 2 == 0){
    sumalista = sumalista + lista[i]
    }
}
console.log(`la suma de sus elementos pares es igual a ${sumalista}`)

// Ejercicio 11: Ingresar una palabra e identificar la letras distintas y sus repeticiones.


