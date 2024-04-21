#Impuetos 
valor= float(input("Ingrese el precio de sus impuestos: "))
if valor>10000000:
    print("Debe pagar el impuesto")
else:
    print("No debes pagar el impuesto")

#Leer 4 valores y hallar promedio y total
valores= []
for i in range(0,4,1):
    valores.append(float(input("Ingrese el numero")))

def totalValores(num):
    total=0
    for n in range(0,len(num)):
        total=total+num[n]
    return total
def promedio(t):
    return t/4
if(totalValores(valores)<5000000):
    print("Puedes buscan chamba")
else:
    print("Dona dinero")
    
print("El total es ",totalValores(valores)," y su promedio es ",promedio(totalValores(valores)))

# V=IR
I=float(input("Ingrese la corriente: "))
R=float(input("Ingrese la resistencia: "))
V=I*R
if V>2000:
    print("Peligro")