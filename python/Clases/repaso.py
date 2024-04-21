""" #       EJERCICIO 1
numeros= [1,2,3,4,5,6,7,8,9]
#Funcion lambda que dice si es par 
pares= filter(lambda numero : numero%2 == 0, numeros)
#Filter lo que hace es pasarle la lista los parametros de la lista. Basicamente es un iterable (Ciclo) sin ser un ciclo

#Imprimo el resultado 
print(list(pares)) 
"""

#       EJERCICIO 2
#Pedir dos edades y decir si es el profesor(mayor) o el alumno(Menor) 
def compañeres(cantidad):
    compañeros=[]
    for indice in range(cantidad):
        nombre=input("Ingrese su nombre: ")
        edad=int(input("Ingrese su edad: "))
        #Creo una tupla para almacenar en una sola posicion de la lista cada compañero
        compañero=(nombre,edad)
        compañeros.append(compañero)
    #Ahora para ordenarlos por edad debo usar sort(), con el parametro de llave = a la edad
    compañeros.sort(key=lambda x:x[1])
    #Esta expresion demuestra que la llave de la lista es el segundo valor de la tupla (Yo tengo una lista de tuplas)
    
    #Acedo a el ultimo elemento que sera el profesor y el primero sera un estudiante 
    estudiante=compañeros[0][0]
    profesor=compañeros[-1][0]
    
    return estudiante,profesor
#Ya que ejecuto el for de la funcion dos veces, imprimo quien es profesor y alumno
estudiante,profesor= compañeres(2)
print("El profesor es",profesor,"y el estudiante es",estudiante) 

