#Funcion que muestras el menu de la aplicacion
def menu():
    print(
        "\n1. Registrar paciente\n"+
          "2. Actualizar paciente\n"+
          "3. Ver pacientes activos\n"+
          "4. Ver pacientes Inactivos\n"+
          "5. Salir del programa\n"
          )

#Funcion que registra una mascola en la lista de pacientes
def registrar_paciente(pacientes):
    try:
        nombre=input("Ingrese el nombre del paciente: ")
        identificacion= input("Ingrese la identificacion del paciente: ")
        dueno= input("Ingrese el nombre del dueño del paciente: ")
        raza= input("Ingrese la raza del paciente: ")
        edad= int(input("Ingrese la edad del paciente en años: "))
        estado= input("Ingrese el estado del paciente: ")
        diagnostico= input("Ingrese el diagnostico del paciente: ")

        mascota=[nombre,identificacion,dueno,raza,edad,estado,diagnostico]
        pacientes.append(mascota)
        print("\nEl paciente se registro con exito")
    except:
        print("Ingresaste un dato erroneamente, intenta de nuevo")

#Funcion que lista todos los pacientes (todas las macotas)
def listar_pacientes(pacientes):
    for i in pacientes:
        print("Paciente: "+i[0]+" Identicado: "+i[1]+" Diagnostico: "+i[6])

#Funcion que actualiza todos los datos del paciente(Mascota)
def actualizar_pacientes(pacientes):
    listar_pacientes(pacientes)
    opcion=input("Ingresa la identificacion del paciente que deseas actualizar: ")

    for i in range(len(pacientes)):
        if(pacientes[i][1].lower()==opcion.lower()):
            try:
                nombre=input("Ingrese el nombre del paciente: ")
                identificacion= input("Ingrese la identificacion del paciente: ")
                dueno= input("Ingrese el nombre del dueño del paciente: ")
                raza= input("Ingrese la raza del paciente: ")
                edad= int(input("Ingrese la edad del paciente en años: "))
                estado= input("Ingrese el estado del paciente: ")
                diagnostico= input("Ingrese el diagnostico del paciente: ")
                mascota=[nombre,identificacion,dueno,raza,edad,estado,diagnostico]
                pacientes[i]=mascota
                print("Se actualizo con exito el paciente!")
                break
            except:
                print("Ingresaste un dato erroneamente, intenta de nuevo")
        else:
            print("El paciente indicado no existe")

#Funcion que lista segun el estado del paciente
def listar_condicion(pacientes,estado):
    for i in range(len(pacientes)):
        if(pacientes[i][5].lower()==estado.lower()):
            print("Nombre: "+pacientes[i][0]+" -- Dueño: "+pacientes[i][2]+" -- Diagnostico: "+pacientes[i][6])

#Funcion principal, es la encargada de llamar las otras funciones y manejar el menu
def main():
    pacientes=[]

    while True:
        input("\nBienvenido, presione ENTER para comenzar")
        print("---------------------------------------")
        menu()
        opcion=input("Que opcion elijes? \n")

        if(opcion=="5"):
            break
        elif(opcion=="1"):
            registrar_paciente(pacientes)
        elif(opcion=="2"):
            actualizar_pacientes(pacientes)
        elif(opcion=="3"):
            listar_condicion(pacientes,"activo")
        elif(opcion=="4"):
            listar_condicion(pacientes,"inactivo")
        else:
            print("Opcion no valida")
            
main()