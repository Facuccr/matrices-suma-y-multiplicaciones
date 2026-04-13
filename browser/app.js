function generar() {
  const filasA = parseInt(document.getElementById("filasA").value);
  const colsA = parseInt(document.getElementById("colsA").value);
  const filasB = parseInt(document.getElementById("filasB").value);
  const colsB = parseInt(document.getElementById("colsB").value);

  // validacion
  if (!filasA || !colsA || !filasB || !colsB) {
    alert("Completá todas las dimensiones");
    return;
  }

  const cont = document.getElementById("contenedor");
  cont.innerHTML = "";

  // matriz A
  cont.innerHTML += "<h3>Matriz A</h3>";
  for (let i = 0; i < filasA; i++) {
    for (let j = 0; j < colsA; j++) {
      cont.innerHTML += `<input id="A-${i}-${j}" type="number" value="0"> `;
    }
    cont.innerHTML += "<br>";
  }

  // matriz B
  cont.innerHTML += "<h3>Matriz B</h3>";
  for (let i = 0; i < filasB; i++) {
    for (let j = 0; j < colsB; j++) {
      cont.innerHTML += `<input id="B-${i}-${j}" type="number" value="0"> `;
    }
    cont.innerHTML += "<br>";
  }
}

function obtenerMatriz(prefijo, filas, cols) {
  let matriz = [];

  for (let i = 0; i < filas; i++) {
    matriz[i] = [];
    for (let j = 0; j < cols; j++) {
      const input = document.getElementById(`${prefijo}-${i}-${j}`);

      if (!input) {
        alert("Error: primero generá las matrices");
        return null;
      }

      matriz[i][j] = parseFloat(input.value) || 0;
    }
  }

  return matriz;
}

function sumaMatrices(A, B) {
  let resultado = [];

  for (let i = 0; i < A.length; i++) {
    resultado[i] = [];
    for (let j = 0; j < A[0].length; j++) {
      resultado[i][j] = A[i][j] + B[i][j];
    }
  }

  return resultado;
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

function mostrarResultado(matriz) {
  let html = "<table border='1' cellpadding='8' cellspacing='0'>";

  for (let i = 0; i < matriz.length; i++) {
    html += "<tr>";
    for (let j = 0; j < matriz[i].length; j++) {
      html += `<td>${matriz[i][j]}</td>`;
    }
    html += "</tr>";
  }

  html += "</table>";

  document.getElementById("resultado").innerHTML = html;
}

function sumar() {
  const filasA = parseInt(document.getElementById("filasA").value);
  const colsA = parseInt(document.getElementById("colsA").value);
  const filasB = parseInt(document.getElementById("filasB").value);
  const colsB = parseInt(document.getElementById("colsB").value);

  if (filasA !== filasB || colsA !== colsB) {
    alert("Las matrices deben tener el mismo tamaño");
    return;
  }

  const A = obtenerMatriz("A", filasA, colsA);
  const B = obtenerMatriz("B", filasB, colsB);

  if (!A || !B) return;

  mostrarResultado(sumaMatrices(A, B));
}

function multiplicar() {
  const filasA = parseInt(document.getElementById("filasA").value);
  const colsA = parseInt(document.getElementById("colsA").value);
  const filasB = parseInt(document.getElementById("filasB").value);
  const colsB = parseInt(document.getElementById("colsB").value);

  if (colsA !== filasB) {
    alert("Columnas de A deben ser iguales a filas de B");
    return;
  }

  const A = obtenerMatriz("A", filasA, colsA);
  const B = obtenerMatriz("B", filasB, colsB);

  if (!A || !B) return;

  mostrarResultado(multiplicarMatrices(A, B));
}
