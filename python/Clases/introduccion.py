# Comentario de linea 
"""
Comentario 
de
bloque 
"""

#Built ins
print("Hello world")
#Funciones preestablecidas 
print(max(1,2,3,4))
print(min(1,2,3,4))

#Variables 
lista=[1,2,3.2,'hola']
print(type(lista))
""" 
para definir un dato string se usa str
complex es un numero complejo
tuple es una lista pero sin poderse modificar 
"""
#Concatenar 
nombre = "Sebastian"
barrio = "Castilla"
print(nombre+' vive en '+barrio)
#Puedo pasarle parametros para concatenar usando ,
print(nombre,barrio)

#Entradas por consola 
nombre = input("Ingrese su nombre: ")
saldo = input("Ingrese su saldo en su cuenta: ")
print(nombre,", tienes en tu cuenta",saldo)

#print(saldo+200) saca error, por lo que se debe castear 
print(int(saldo)+200)
#Regularmente el casteo se hace mediante el punto de lectura (este caso es en la linea 30)
