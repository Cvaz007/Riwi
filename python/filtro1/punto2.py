#Funcion que se encarga de encontrar el indice de la lista donde se encuentra un valor dado
def encontrar_producto(valor,lista):
    for i in range(len(lista)):
        if(lista[i][0].lower()==valor.lower()):
            return i
    else: return "f"
        
#Funcion encargada de mostrar el menu del programa
def menu():
    print(
        "\n1. Volver a registrar el cliente\n"+
          "2. Agregar producto al carrito de compras\n"+
          "3. Listar el carrito de compras\n"+
          "4. Actualizar carrito de compras\n"+
          "5. Eliminar producto en carrito de compras\n"+
          "6. Finalizar programa\n"
          )
    
#Funcion para registrar un usuario
def registrar_usuario():
    nombres=input("Ingrese sus nombres: ")
    apellidos=input("Ingrese sus apellidos: ")
    documento=input("Ingrese su numero de documento: ")
    cliente=[nombres,apellidos,documento]
    return cliente

#Funcion para listar los productos con su nombre y precio
def listar_productos(productos):
    for i in productos:
        print(i[0]," $",i[1])

#Funcion para agregar un producto al carrito
def agregar_carrito(carrito, productos):
    producto=[]
    listar_productos(productos)
    opcion=input("\nCual producto deseas agregar? ")
    cantidad=float(input("y cuanta cantidad? "))

    indice=encontrar_producto(opcion,productos)
    if(indice=="f"):
        print("El producto no existe")
    else:
        producto=[productos[indice][0],productos[indice][1],productos[indice][2],cantidad]
        carrito.append(producto)
        print("Se ha agregado al carrito con exito!")

#Funcion para calcular el valor total (incluye iva)
def iva(bruto):
    neto=bruto*1.19
    print("TOTAL:", neto)

#Funcion para calcular el subtotal del carrito de compras
def sub_total(carrito):
    bruto=0
    for i in carrito:
        bruto+=(i[1]*i[3])
    print("SUBTOTAL:",bruto)
    iva(bruto)

#Funcion para listar los productos que se encuentran en el carrito de compras
def listar_carrito(carrito):
    print("\nListando el carrito de compras...")
    for i in carrito:
        print(i[0],"$",i[1]," -- Cantidad:",i[3]," -- Categoria:",i[2])

#Funcion para actualizar la cantidad de un producto del carrito de compras 
def actualizar_carrito(carrito):
    listar_carrito(carrito)
    opcion=input("\nCual producto deseas actualizar? ")
    cantidad=float(input("Cual es la nueva cantidad? "))

    indice=encontrar_producto(opcion,carrito)
    if(indice=="f"):
        print("El producto no existe")
    else:
        carrito[indice][3]=cantidad
        print("Cantidad de producto actualizada")

#Funcion para eliminar un producto del carrito de compras
def elimnar_producto(carrito):
    listar_carrito(carrito)
    opcion=input("\nCual producto deseas eliminar? ")
    
    indice=encontrar_producto(opcion,carrito)
    if(indice=="f"):
        print("El producto no existe")
    else:
        carrito.pop(indice)
        print("Producto eliminado del carrito")

#Funcion para llenar la lista de productos con algunos valores por defecto (11 productos)
def productos_predeterminados():
    #Formato del producto: Nombre, Precio, Categoria
    productos=[
        ["Aguacate",2000,"Frutas"],
        ["Pera",2500,"Frutas"],
        ["Arroz",3000,"Granos"],
        ["Lentejas",3500,"Granos"],
        ["Leche",4100,"Lacticos"],
        ["Aceite",20000,"Condimentos"],
        ["Sal",2000,"Condimentos"],
        ["Azucar",2000,"Condimentos"],
        ["Frijoles",4600,"Granos"],
        ["Salchicha",500,"Carnicos"],
        ["Banano",2000,"Frutas"]
    ]
    return productos

#Funcion principal, se encarga de ejecutar la logica del menu y llamar las funciones necesarias para la ejecucion del programa
def main():
    productos= productos_predeterminados()
    carrito=[]
    input("Bienvenido, presione ENTER para comenzar")
    cliente=registrar_usuario()
    
    while True:
        print("---------------------------------------")
        menu()
        opcion=input("Que opcion elijes? \n")

        if(opcion=="6"):
            break
        elif(opcion=="1"):
            cliente=registrar_usuario()
        elif(opcion=="2"):
            agregar_carrito(carrito,productos)
        elif(opcion=="3"):
            listar_carrito(carrito)
            sub_total(carrito)
        elif(opcion=="4"):
            actualizar_carrito(carrito)
        elif(opcion=="5"):
            elimnar_producto(carrito)
    

main()
