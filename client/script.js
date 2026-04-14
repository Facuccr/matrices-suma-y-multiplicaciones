function generarMatrices() {
  let filasA = document.getElementById("filasA").value;
  let colsA = document.getElementById("colsA").value;
  let filasB = document.getElementById("filasB").value;
  let colsB = document.getElementById("colsB").value;

  let contenedor = document.getElementById("matrices");
  contenedor.innerHTML = "";

  contenedor.appendChild(crearTabla("A", filasA, colsA));
  contenedor.appendChild(crearTabla("B", filasB, colsB));
}

function crearTabla(nombre, filas, columnas) {
  let div = document.createElement("div");
  let titulo = document.createElement("h3");
  titulo.innerText = "Matriz " + nombre;
  div.appendChild(titulo);

  for (let i = 0; i < filas; i++) {
    let fila = document.createElement("div");

    for (let j = 0; j < columnas; j++) {
      let input = document.createElement("input");
      input.type = "number";
      input.id = nombre + "_" + i + "_" + j;
      fila.appendChild(input);
    }

    div.appendChild(fila);
  }

  return div;
}

function obtenerMatriz(nombre, filas, columnas) {
  let matriz = [];

  for (let i = 0; i < filas; i++) {
    let fila = [];

    for (let j = 0; j < columnas; j++) {
      let valor = document.getElementById(nombre + "_" + i + "_" + j).value;

      if (valor === "" || isNaN(valor)) {
        alert("Datos inválidos");
        return null;
      }

      fila.push(Number(valor));
    }

    matriz.push(fila);
  }

  return matriz;
}

function mostrarResultado(matriz) {
  let div = document.getElementById("resultado");
  div.innerHTML = "";

  matriz.forEach((fila) => {
    let p = document.createElement("p");
    p.innerText = fila.join(" ");
    div.appendChild(p);
  });
}

function sumar() {
  let fA = parseInt(document.getElementById("filasA").value);
  let cA = parseInt(document.getElementById("colsA").value);
  let fB = parseInt(document.getElementById("filasB").value);
  let cB = parseInt(document.getElementById("colsB").value);

  if (fA !== fB || cA !== cB) {
    alert("No se pueden sumar");
    return;
  }

  let A = obtenerMatriz("A", fA, cA);
  let B = obtenerMatriz("B", fB, cB);

  if (!A || !B) return;

  let resultado = [];

  for (let i = 0; i < fA; i++) {
    let fila = [];

    for (let j = 0; j < cA; j++) {
      fila.push(A[i][j] + B[i][j]);
    }

    resultado.push(fila);
  }

  mostrarResultado(resultado);
}

function multiplicar() {
  let fA = parseInt(document.getElementById("filasA").value);
  let cA = parseInt(document.getElementById("colsA").value);
  let fB = parseInt(document.getElementById("filasB").value);
  let cB = parseInt(document.getElementById("colsB").value);

  if (cA !== fB) {
    alert("No se pueden multiplicar");
    return;
  }

  let A = obtenerMatriz("A", fA, cA);
  let B = obtenerMatriz("B", fB, cB);

  if (!A || !B) return;

  let resultado = [];

  for (let i = 0; i < fA; i++) {
    let fila = [];

    for (let j = 0; j < cB; j++) {
      let suma = 0;

      for (let k = 0; k < cA; k++) {
        suma = suma + A[i][k] * B[k][j];
      }

      fila.push(suma);
    }

    resultado.push(fila);
  }

  mostrarResultado(resultado);
}
