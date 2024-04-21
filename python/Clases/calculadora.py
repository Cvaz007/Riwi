#Declaracion de funciones de la calculadora 
def sumar(a,b):
    return (a+b)
def restar(a,b):
    return (a-b)
def multiplicar(a,b):
    return (a*b)
def dividir(a,b):
    return (a/b)
def menu ():
    print("¿Que deseas hacer? \n"+
      "1. Sumar \n"+
      "2. Restar \n"+
      "3. Multiplicar \n"+
      "4. Dividir \n"+
      "5. Salir")
#Funcion encargada del menu
def desicion(d,a,b):
    operacion=0
    while(d!=5):
        
        if(operacion==0):
            match d:
                case 1:
                    operacion=sumar(a,b)
                    print("La suma es: ",operacion)
                case 2:
                    operacion=restar(a,b)
                    print("La resta es: ",restar(a,b))
                case 3:
                    operacion=multiplicar(a,b)
                    print("La multiplicacion es: ",operacion)
                case 4:
                    operacion=dividir(a,b)
                    print("La division es: ",operacion)
        else:
            nuevoNum= float(input("Ingrese un numero: "))
            match d:
                case 1:
                    operacion=sumar(operacion,nuevoNum)
                    print("La suma es: ",operacion)
                case 2:
                    operacion=restar(operacion,nuevoNum)
                    print("La resta es: ",operacion)
                case 3:
                    operacion= multiplicar(operacion,nuevoNum)
                    print("La multiplicacion es: ",operacion)
                case 4:
                    operacion=dividir(operacion,nuevoNum)
                    print("La division es: ",operacion)
        d= int(input("Ingrese la opcion que desea ejecutar: "))
#Captura de valores y menu
numA= float(input("Ingrese un numero: "))
numB= float(input("Ingrese un numero: "))
menu()
d= int(input("Ingrese la opcion que desea ejecutar: "))
desicion(d,numA,numB)

#Para tener en cuanta a la hora de sumar varios numeros mediante una lista 
def sumita(*lista):
    return sum(lista)

resultado = sumita(1,2,3,4)
print(resultado)




