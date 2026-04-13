const prompt = require("prompt-sync")();

// cargar matriz
function cargarMatriz(nombre) {
  let filas = parseInt(prompt(`Filas de ${nombre}: `));
  let columnas = parseInt(prompt(`Columnas de ${nombre}: `));

  let matriz = [];

  for (let i = 0; i < filas; i++) {
    matriz[i] = [];
    for (let j = 0; j < columnas; j++) {
      matriz[i][j] = parseInt(prompt(`${nombre}[${i}][${j}]: `));
    }
  }

  return matriz;
}

function sumaMatrices(A, B) {
  return A.map((fila, i) => fila.map((val, j) => val + B[i][j]));
}

function multiplicarMatrices(A, B) {
  let resultado = [];

  for (let i = 0; i < A.length; i++) {
    resultado[i] = [];
    for (let j = 0; j < B[0].length; j++) {
      let suma = 0;
      for (let k = 0; k < A[0].length; k++) {
        suma += A[i][k] * B[k][j];
      }
      resultado[i][j] = suma;
    }
  }

  return resultado;
}

// programa principal
console.log("1. Sumar matrices");
console.log("2. Multiplicar matrices");

let op = prompt("Seleccione opcion: ");

let A = cargarMatriz("A");
let B = cargarMatriz("B");

if (op === "1") {
  if (A.length === B.length && A[0].length === B[0].length) {
    console.log("Resultado:", sumaMatrices(A, B));
  } else {
    console.log("Error: dimensiones incompatibles");
  }
}

if (op === "2") {
  if (A[0].length === B.length) {
    console.log("Resultado:", multiplicarMatrices(A, B));
  } else {
    console.log("Error: dimensiones incompatibles");
  }
}
