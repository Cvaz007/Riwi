""" Descripción del problema: Escribe un programa en Python que solicite al usuario su año de
nacimiento y calcule automáticamente su edad. Luego, el programa debe verificar si la persona es
mayor de 18 años y mostrar un mensaje que diga "Eres mayor de edad" o "Eres menor de edad"
según corresponda. """
    
def main():
    edad=int(input("Ingrese su año de nacimiento "))
    cal_edad= 2023-edad
    print("Tienes ",cal_edad,"años")

main()