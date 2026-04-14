from flask import Flask, request, jsonify
from flask import send_from_directory

app = Flask(__name__)

@app.route('/')
def home():
    return send_from_directory('.', 'index.html')

@app.route('/sumar', methods=['POST'])
def sumar():
    data = request.json
    A = data['A']
    B = data['B']

    resultado = []

    for i in range(len(A)):
        fila = []

        for j in range(len(A[0])):
            fila.append(A[i][j] + B[i][j])

        resultado.append(fila)

    return jsonify(resultado)

@app.route('/multiplicar', methods=['POST'])
def multiplicar():
    data = request.json
    A = data['A']
    B = data['B']

    resultado = []

    for i in range(len(A)):
        fila = []

        for j in range(len(B[0])):
            suma = 0

            for k in range(len(B)):
                suma += A[i][k] * B[k][j]

            fila.append(suma)

        resultado.append(fila)

    return jsonify(resultado)

if __name__ == '__main__':
    app.run(debug=True)