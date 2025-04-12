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
// Utilizar un objeto literal

let palabra3 = "diccionario"
letras = palabra3.split('')
let contador = {}
letras.forEach(element => {
    if (contador[element]) {
        contador[element]++;
    }else {
        contador[element] = 1;
    }
    
});
console.log(`La palabra "${palabra3}" esta formada por la siguiente cantidad de letras:`);
console.log(contador);

// Ejercicio 12: Crear un objeto literal con las siguiente propiedades: nombre, sexo biológico y edad.
//  Agregar varios elementos a una lista. Obtener el promedio de edad,
//  el nombre de la mujer con mayor edad, el nombre del hombre con menor edad,
//  el promedio de edad de las mujeres.


let persona1 = {nombre: 'Jorge', sexo: 'masculino', edad: 12,}
let persona2 = {nombre: 'María', sexo: 'femenino', edad: 24,}
let persona3 = {nombre: 'Lucas', sexo: 'masculino', edad: 32,}
let persona4 = {nombre: 'Sandra', sexo: 'femenino', edad: 46,}
let persona5 = {nombre: 'José', sexo: 'masculino', edad: 26,}

let listapersonas = [persona1, persona2, persona3, persona4, persona5]
let promedioedad = 0
let mayorf = 0
let nombref = 0
let menorm = 0
let nombrem = 0
let promedioedadf = 0
let numerof = 0

for (let i = 0; i < listapersonas.length; i++) {
    promedioedad = promedioedad + listapersonas[i].edad
    if (listapersonas[i].sexo == 'femenino'){
        promedioedadf = promedioedadf + listapersonas[i].edad
        if (mayorf < listapersonas[i].edad){
            mayorf = listapersonas[i].edad
            nombref = i
            numerof++
        }

    }else{
        if (menorm > listapersonas[i].edad){
            menorm = listapersonas[i].edad
            nombrem = i
        }
    }
}
promedioedad = promedioedad / listapersonas.length
promedioedadf = promedioedadf / numerof
console.log(`en una lista con las siguientes personas: ${listapersonas[0].nombre}, ${listapersonas[1].nombre}, ${listapersonas[2].nombre}, ${listapersonas[3].nombre} y ${listapersonas[4].nombre}`)
console.log(`el promedio de edad es ${promedioedad}`)
console.log(`la mujer de mayor edad es ${listapersonas[nombref].nombre}`)
console.log(`el hombre de menor edad es ${listapersonas[nombrem].nombre}`)
console.log(`el promedio de edad entre las mujeres es ${promedioedadf}`)

// Ejercicio 13: Para el ejercicio anterior, generar una funcion para cada uno de los requerimientos.

let persona6 = {nombre: 'laura', sexo: 'femenino', edad: 36,}
let persona7 = {nombre: 'micaela', sexo: 'femenino', edad: 47,}
let persona8 = {nombre: 'daniela', sexo: 'femenino', edad: 88,}
let persona9 = {nombre: 'guillermo', sexo: 'masculino', edad: 73,}
let persona10 = {nombre: 'luciano', sexo: 'masculino', edad: 52,}

listapersonas = [persona1, persona2, persona3, persona4, persona5, persona6, persona7, persona8, persona9, persona10]

function funcionpromedio(a){
    let p = 0
    for (let i = 0; i < a.length; i++) {
        p = p + a[i].edad
    }
    let resultado = p / a.length
    return resultado
}
console.log(`en una lista con las siguientes personas: ${listapersonas[0].nombre}, ${listapersonas[1].nombre}, ${listapersonas[2].nombre}, ${listapersonas[3].nombre}, ${listapersonas[4].nombre}, ${listapersonas[5].nombre}, ${listapersonas[6].nombre}, ${listapersonas[7].nombre}, ${listapersonas[8].nombre} y ${listapersonas[9].nombre}`)
console.log(`el promedio de edad es ${funcionpromedio(listapersonas)}`)

function funcionmayorf(a){
    let m = 0
    let n = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i].sexo == 'femenino'){
            if (m < a[i].edad){
             m = a[i].edad //este dato va a corresponder a la mayor edad entre las mujeres
             n = i //este dato va a corresponder a la ubicacion en el array de la mujer con mayor edad
            }
        }
    }
    let resultado = `la mujer de mayor edad es ${a[n].nombre} y tiene ${m} años`
    return resultado
}
console.log(funcionmayorf(listapersonas))

function funcionmenorm(a){
    let m = 999
    let n = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i].sexo == 'masculino'){
            if (m > a[i].edad){
             m = a[i].edad //este dato va a corresponder a la menor edad entre los hombres
             n = i //este dato va a corresponder a la ubicacion en el array de el hombre con menor edad
            }
        }
    }
    let resultado = `el hombre de menor edad es ${a[n].nombre} y tiene ${m} años`
    return resultado
}
console.log(funcionmenorm(listapersonas))

function funcionpromediof(a){
    let p = 0
    let m = 0
     for (let i = 0; i < a.length; i++) {
         if (a[i].sexo == 'femenino'){
             p = p + a[i].edad
             m++
         }
     }
  let resultado = p / m
  return resultado
}

console.log(`el promedio de edad de las mujeres es ${funcionpromediof(listapersonas)}`)

// Ejercicio 14: Crear una funcion que reciba 3 parametros: minimo, maximo y divisor.
//  Devolver una lista con los divisores del numero ingresado.

function divisor(min, max, div){
    console.log(`los siguientes numeros entre ${min} y ${max} son divisores de ${div}`) //    console.log(`los siguientes numeros entre ${min} y ${max} son divisibles por ${div}`)
    for(i = min; i <= max; i++){
        if(div % i == 0){ //        if(i % div == 0){
            console.log(i)
        }
    }
}
divisor(4, 59, 150)