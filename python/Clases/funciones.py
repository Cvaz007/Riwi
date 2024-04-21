"""
Una funcion en python se define de la siguiente manera:
def nombreFuncion (parametros):

    codigo...

    return unValor
"""
def calEdad(nacimiento):
    edad=2023-nacimiento
    return edad

edad=int(input("Ingrese el año de nacimiento: "))
print(calEdad(edad))

#Conversion de la funcion propuesta
def triple (a):
    return a*3
a= float(input("Ingrese el nùmero:"))
print("El triple es:",triple(a) )


