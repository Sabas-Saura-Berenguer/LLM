// Exercici 1 
/* 
Dissenya una funció que donat un array de notes dels 10 problemes del examen (cadascun d’ells
puntuats de 0 a 10), un valor de bonus i un valor de penalització, ens retorni la nota del examen.
S’han de descartar els dos problemes amb pitjor nota.
El bonus es suma a la nota final i el penalitzador es resta.
Fes un console.log del resultat.
*/

function ejercicio1 () {
    console.log("------ EJERCICIO 1 ------");

    // Paso 1: Crear un array con las notas de los problemas
    let problemas = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];
    console.log("Array problemas inicial --->  " + problemas);
    
    // Paso 2: Definir las variables bonus y penalización
    let bonus = 0.25;
    let penalizacion = 1;
    // Paso 3: Ordenar el array de menor a mayor
    problemas.sort((a, b) => a - b);
    console.log("Array problemas ordenado --->  " + problemas);

    // Paso 4: Calcular la nota final
    function calcularNota(problemas, bonus, penalizacion) {
        let notaFinal = 0;
        // Paso 4.1: Eliminar las dos peores notas
        problemas.shift();
        problemas.shift();
    
        console.log("Array problemas sin las dos peores notas --->  " + problemas);
        // Paso 4.2: Sumar las notas restantes
        for (let i = 0; i < problemas.length; i++) {
            notaFinal += problemas[i];
        }
        console.log("Suma de las notas --->  " + notaFinal);
    
        // Paso 4.3 Hacer la media de la suma
        notaFinal = notaFinal / problemas.length;
    
        // Paso 4.4 Aplicar el bonus y la penalización
        notaFinal += bonus;
        notaFinal -= penalizacion;
    
        // Paso 4.5 Devolver la nota final
        return notaFinal;
    }
    console.log("Nota final del examen --->  " + calcularNota(problemas, bonus, penalizacion))

}
ejercicio1();

// Exercici 2
/*
Escriu una funció que donat un array de treballadors, retorni una còpia de l’array on els treballadors
majors de 40 anys i sou igual o superior a 15 000 € vegin incrementat el seu sou en 2 000 €. L’array
ha d’estar ordenat per edat de menor a major.
Fes un console.log del resultat.
*/
function ejercicio2() {
    console.log("------ EJERCICIO 2 ------");

    // Paso 1 Crear un array con los trabajadores
    let trabajadores = [
        { "nom":"Joan", "llinatges":"Ques Ferrer", "edat":45, "sou":15000},
        { "nom":"Pere", "llinatges":"Gomila Alarde", "edat":30, "sou":10000},
        { "nom":"Marta", "llinatges":"Salas García", "edat":55, "sou":40000}
    ];
    // Paso 2 Declarar las variables edad y sueldo
    let edad = 40;
    let sueldo = 15000;
    
    // Paso 3 Ordenar el array por edad
    trabajadores.sort((a, b) => a.edat - b.edat);

    // Paso 4 incrementar sueldo
    function incrementarSueldo(trabajadores, edad, sueldo) {
        for (let i = 0; i < trabajadores.length; i++) {
            if (trabajadores[i].edat > edad && trabajadores[i].sou >= sueldo) {
                trabajadores[i].sou += 2000;
            }
        }
        return trabajadores;
    }
    console.log(incrementarSueldo(trabajadores, edad, sueldo));
}
ejercicio2();

// Exercici 3






// Exercici 4
/*
Fent servir Math, try / catch / throw i forEach genera una funció que calculi l’arrel quadrada d’un array de números.
En cas de tenir un número negatiu hem de generar un error personalitzat.
L’array de resultats ha de tenir 3 decimals.
Fes un console.log del resultat.
*/
function ejercicio4() {
    console.log("------ EJERCICIO 4 ------");

    // Paso 1 Crear Try Catch
    try {
        // Paso 2 Crear array de numeros
        let numeros = [5,64,9,2,-83];
        numeros.forEach(numero => {
            if (numero < 0) {
                throw new Error("Numero negativo");
            } else {
                console.log(Math.sqrt(numero));
            }
        });
    } catch (error) {
        console.log("Error: " + error);
    }
    
}
ejercicio4();

// Exercici 5





// Exercici 6






// Exercici 7
/*
Crea un codi que funcioni amb var, però que doni un resultat diferent amb let, i que inclogui el Operador Ternari o Elvis.
Presenta els dos codis, el de let i el de var i fes un console.log del resultat de cadascun.
Explica el resultat esperat amb var i let i explica perquè dona aquests resultats als comentaris
 */
function ejercicio7() {
    console.log("------ EJERCICIO 7 ------");
    function ejemploVar() {
        var x = 10;
      
        if (true) {
          var x = 20; // esta declaración x és la misma que la primera
        }
      
        var result = (x > 15) ? 'Mayor que 15' : 'Menor o igual a 15';
        console.log(result); // Se espera 'Mayor que 15' ya que x = 20
      }
      
      ejemploVar();

      function ejemploLet() {
        let x = 10;
      
        if (true) {
          let x = 20; // Esta x és una nueva variable, diferente de la primera
        }
      
        let result = (x > 15) ? 'Major que 15' : 'Menor o igual a 15';
        console.log(result); // Se espera 'Menor o igual a 15' ya que x = 10
      }
      ejemploLet();
}
ejercicio7();
      // lo que ocurre es que var tiene un scope global y se puede modificar refiriendose a si misma todo el rato,
      // mientras que let tiene un scope de bloque,
      // causando que los dos lets que creamos con el mismo nombre en lugar de que el segundo cambie el valor del primero,
      // lo que hace es crear una nueva variable en otra posicion de memoria

// 

// Exercici 8
/*
Crea una funció recursiva per calcular l'enèsim nombre de la seqüència de Fibonacci.
Una funció recursiva es aquella que es crida a sí mateixa.
Fes un console.log del resultat.
*/
function ejercicio8() {
    console.log("------ EJERCICIO 8 ------");

    const fibonacci = n => {
        if (n < 2) return n;
        return fibonacci(n-2) + fibonacci(n-1)
    }
    for (let i = 0; i < 11; i++) {
        console.log(fibonacci(i));        
    }
}
ejercicio8();



// Exercici 9





// Exercici 10