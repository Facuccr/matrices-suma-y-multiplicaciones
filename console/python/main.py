#cargar matriz
def cargar_matriz(nombre):
    filas = int(input(f"Ingrese filas de la matriz {nombre}: "))
    columnas = int(input(f"Ingrese columnas de la matriz {nombre}: "))
    
    matriz = []
    
    for i in range(filas):
        fila = []
        for j in range(columnas):
            valor = int(input(f"{nombre}[{i}][{j}]: "))
            fila.append(valor)
        matriz.append(fila)
    
    return matriz


def suma_matrices(A, B):
    resultado = []
    for i in range(len(A)):
        fila = []
        for j in range(len(A[0])):
            fila.append(A[i][j] + B[i][j])
        resultado.append(fila)
    return resultado


def multiplicar_matrices(A, B):
    resultado = []
    for i in range(len(A)):
        fila = []
        for j in range(len(B[0])):
            suma = 0
            for k in range(len(A[0])):
                suma += A[i][k] * B[k][j]
            fila.append(suma)
        resultado.append(fila)
    return resultado


# programa principal
print("1. Sumar matrices")
print("2. Multiplicar matrices")
op = input("Seleccione opcion: ")

A = cargar_matriz("A")
B = cargar_matriz("B")

if op == "1":
    if len(A) == len(B) and len(A[0]) == len(B[0]):
        print("Resultado:", suma_matrices(A, B))
    else:
        print("Error: dimensiones incompatibles")

elif op == "2":
    if len(A[0]) == len(B):
        print("Resultado:", multiplicar_matrices(A, B))
    else:
        print("Error: dimensiones incompatibles")