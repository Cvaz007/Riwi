tabla = [1,2,3,4]
multi = [0,10,100,1000]
#Se puede iterar dos tablas a la vez siempre y cuando ambas tengan el mismo nuemro de elementos
for ta,mul in zip(tabla,multi):
    print((ta*mul))
    #Aqui es difearente a java, puesto que el indice del for toma es el valor y no el valor del indice  

#Para hacer un for parecido a  un forEach se realiza 
for t in enumerate(tabla):
    indice= t[0]
    print("El indice es: ",indice)

#Dato curioso en python es que los else dentro de los for siempre se van a ejectutar, y se meustra una sola vez sin importar si el for se ejecuta o no 
for t in enumerate(tabla):
    indice= t[0]
    print("El indice es: ",indice)
else:
    print("El ciclo termino")

#Los diccionarios se recoren diferente ya que se necesita una key y su valor
diccionario = {"nombre":1,"edad":2,"dir":34,"tel":4,"null":545}

#Lo que imprime aqui es simplemente la clave del diccionario
for key in diccionario:
    print(key)
#Ahora si quiero que esto imprima simplemente todo el diccionario, debo agregar el .items()
for key in diccionario.items():
    print(key)
#Ademas podemos usar los indices para ir imprimiendo las cosas 
for key in diccionario.items():
    print(f'El indice es {key[0]} y su valor es {key[1]}') 