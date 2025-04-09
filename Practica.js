let a=2;
let b=3;
let resultado;

resultado = a + b; // Suma de a y b

console.log("el resultado es ", resultado);

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
    mayor = f; // d es el menor
}
if (menor > f) {
    menor = f; // e es el menor
}

console .log("el mayor es ", mayor, " el menor es ", menor);

let palabra = "holacomoestas";
console.log("la longitud de la palabra es ", palabra.length); // Longitud de la palabra

let x = 9;
x = x % 2;
if (x == 0) {
    console.log("el numero es par");
    
} else {
    console.log("el numero es impar y su resto es ", x);
}
 let palabra2 = "queso";
 let y = 5;

 for (let z=0; z != y; z++) {
    console.log(palabra2);
    
 }
 // esto es un test