#Funcion que se encarga de encontrar el indice de la lista donde se encuentra un valor dado
def encontrar_producto(valor,lista):
    for i in range(len(lista)):
        if(lista[i][0].lower()==valor.lower()):
            return i
        else: return "f"
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

def main():
    productos= productos_predeterminados()
    carrito=[]
    var=encontrar_producto("miel",productos)
    if(var=="f"):
        print(var)
    
    

main()

""" for i in productos:
    if(i[0].lower()==opcion.lower()):
        producto=[i[0],i[1],i[2],cantidad]
        print("Se ha agregado al carrito con exito!")
        break """

""" for i in range(len(carrito)):
    if(carrito[i][0].lower()==opcion.lower()):
        carrito[i][3]=cantidad
        print("Cantidad de producto actualizada")
        break """

""" for i in range(len(carrito)):
    if(carrito[i][0].lower()==opcion.lower()):
        carrito.pop(i)
        print("Producto eliminado del carrito")
        break """