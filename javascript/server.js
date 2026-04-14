const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

app.post("/sumar", (req, res) => {
  let { A, B } = req.body;
  let resultado = [];

  for (let i = 0; i < A.length; i++) {
    let fila = [];

    for (let j = 0; j < A[0].length; j++) {
      fila.push(A[i][j] + B[i][j]);
    }

    resultado.push(fila);
  }

  res.json(resultado);
});

app.post("/multiplicar", (req, res) => {
  let { A, B } = req.body;
  let resultado = [];

  for (let i = 0; i < A.length; i++) {
    let fila = [];

    for (let j = 0; j < B[0].length; j++) {
      let suma = 0;

      for (let k = 0; k < B.length; k++) {
        suma = suma + A[i][k] * B[k][j];
      }

      fila.push(suma);
    }

    resultado.push(fila);
  }

  res.json(resultado);
});

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});
