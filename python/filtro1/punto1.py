#Funcion para comparar y determinar el estado del usuario segun la tabla
def estado(IMC,nombre):
    #Funcion para mostrar mensaje
    def mensaje(texto):
        print("El estado de",nombre,"es:",texto)

    if(IMC<18.5):
        mensaje("bajo peso")
    elif(IMC>=18.5 and IMC<=24.9):
        mensaje("normal")
    elif(IMC>=25 and IMC<=29.9):
        mensaje("sobrepeso")
    elif(IMC>=30 and IMC<=34.9):
        mensaje("obesidad I")
    elif(IMC>=35 and IMC<=39.9):
        mensaje("obesidad II")
    elif(IMC>=40 and IMC<=49.9):
        mensaje("obesidad III")
    elif(IMC>=50):
        mensaje("obesidad IV")

#Funcion para calcular el IMC de una persona
def calcular_IMC(nombre,peso,estatura):
    IMC=peso/(estatura*estatura)
    print("El indice de masa corporal de",nombre,"es de",IMC)
    estado(IMC,nombre)

#Funcion principal, aqui se piden los datos nombre,peso y estactura y se invocan las funciones necesarias
def main():
    try:
        nombre=input("Ingrese el nombre del usuario: ")
        peso=float(input("Ingrese el peso de "+nombre+" (kg): "))
        estatura=float(input("Ingrese la estatura de "+nombre+" (mts): "))
        print("---------------------------------------")
        calcular_IMC(nombre,peso,estatura)
    except:
        print("Oh!, ocurrio un error, intenta nuevamente")
    
main()

