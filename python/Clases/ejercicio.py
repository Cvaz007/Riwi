#halle el area de un rectangulo
a= float(input("Altura:"))
b= float(input("Base"))

print("El area es: ",(a*b))

#Perimetro de un cuadrado
a= float(input("ingrese el lado:"))
print("El area es: ",(4*a))

"""
Ejercicio propuesto.
En su casa le solicitan que realice un algoritmo en python, que permita
calcular el valor a pagar por concepto de energia electrica. Los datos
que se conocen son los siguientes:

- Mes de consumo Valor Kw.
- Total KW en el mes por estracto
"""
def calServicios(estracto,consumo,tasa):
    if(estracto>0 and estracto<4):
        total= 2000*(tasa*consumo)
    else:
        total= 4000*(tasa*consumo)
    return total
tarifa= float(input("ingrese la tarifa de la energia: "))
consumo= float(input("ingrese el consumo de energia: "))
estracto= int(input("Ingrese el estracto a que perteneces: "))

print(calServicios(estracto,consumo,tarifa))


