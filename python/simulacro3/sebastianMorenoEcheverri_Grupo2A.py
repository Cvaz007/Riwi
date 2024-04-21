def menu():
    print("\n",
        "1.   Ingresar Coder.\n",
        "1.1  Ingresar Trainer grupo A\n",
        "1.2. Buscar Coders duplicados en 2 grupos\n",
        "1.3. Eliminar coders por inasistencia.\n",
        "1.4. Listar los Coders del grupo.\n",
        "1.5. Traslado del coder de grupo.\n",
        "1.6. Reportar los CODERS de mayor y menor edad de cada grupo.\n",  
        "-----------------------------\n",
        "2.1. Monitor de clase\n",
        "2.2  Coder con 0 inasistencia\n",
        "2.3  Coder con más entregas de talleres en Aula\n",
        "2.4  Coder más colaborador\n",
        "2.5  Coder con la mayor nota en Test de nivelación.\n",
        "2.6  Coder más participativo.\n",
        "0. Salir\n"
        )
#2.6
def participativo(grupoA,grupoB,grupoC):
    mayorA=0
    mayorB=0 
    mayorC=0
    
    for i in range(len(grupoA)):
        if(grupoA[i][5]>mayorA):
            mayorA=grupoA[i][5]       
    for i in range(len(grupoB)):
        if(grupoB[i][5]>mayorB):
            mayorB=grupoB[i][5]       
    for i in range(len(grupoC)):
        if(grupoC[i][5]>mayorC):
            mayorC=grupoC[i][5]     
    
    maximo=max(mayorA,mayorB,mayorC)
    
    
    for i in range(len(grupoA)):
        if(grupoA[i][5]==maximo):
            print("El estudiante",grupoA[i][0],"es de los que tienen mayor nota en la nivelacion")       
    for i in range(len(grupoB)):
        if(grupoB[i][5]==maximo):
            print("El estudiante",grupoB[i][0],"es de los que tienen mayor nota en la nivelacion")       
    for i in range(len(grupoC)):
        if(grupoC[i][5]==maximo):
            print("El estudiante",grupoC[i][0],"es de los que tienen mayor nota en la nivelacion")  
#2.5
def mayor_nota(grupoA,grupoB,grupoC):
    mayorA=0
    mayorB=0 
    mayorC=0
    
    for i in range(len(grupoA)):
        if(grupoA[i][9]>mayorA):
            mayorA=grupoA[i][9]       
    for i in range(len(grupoB)):
        if(grupoB[i][9]>mayorB):
            mayorB=grupoB[i][9]       
    for i in range(len(grupoC)):
        if(grupoC[i][9]>mayorC):
            mayorC=grupoC[i][9]     
    
    maximo=max(mayorA,mayorB,mayorC)
    
    
    for i in range(len(grupoA)):
        if(grupoA[i][9]==maximo):
            print("El estudiante",grupoA[i][0],"es de los que tienen mayor nota en la nivelacion")       
    for i in range(len(grupoB)):
        if(grupoB[i][9]==maximo):
            print("El estudiante",grupoB[i][0],"es de los que tienen mayor nota en la nivelacion")       
    for i in range(len(grupoC)):
        if(grupoC[i][9]==maximo):
            print("El estudiante",grupoC[i][0],"es de los que tienen mayor nota en la nivelacion")  
#2.4
def colaborador(grupoA,grupoB,grupoC):
    mayorA=0
    mayorB=0 
    mayorC=0
    
    for i in range(len(grupoA)):
        if(grupoA[i][8]>mayorA):
            mayorA=grupoA[i][8]       
    for i in range(len(grupoB)):
        if(grupoB[i][8]>mayorB):
            mayorB=grupoB[i][8]       
    for i in range(len(grupoC)):
        if(grupoC[i][8]>mayorC):
            mayorC=grupoC[i][8]     
    
    maximo=max(mayorA,mayorB,mayorC)
    
    
    for i in range(len(grupoA)):
        if(grupoA[i][8]==maximo):
            print("El estudiante",grupoA[i][0],"es de los que tienen mas colaboraciones")       
    for i in range(len(grupoB)):
        if(grupoB[i][8]==maximo):
            print("El estudiante",grupoB[i][0],"es de los que tienen mas colaboraciones")       
    for i in range(len(grupoC)):
        if(grupoC[i][8]==maximo):
            print("El estudiante",grupoC[i][0],"es de los que tienen mas colaboraciones")  
#2.3
def entregas(grupoA,grupoB,grupoC):
    mayorA=0
    mayorB=0 
    mayorC=0
    
    for i in range(len(grupoA)):
        if(grupoA[i][7]>mayorA):
            mayorA=grupoA[i][7]       
    for i in range(len(grupoB)):
        if(grupoB[i][7]>mayorB):
            mayorB=grupoB[i][7]       
    for i in range(len(grupoC)):
        if(grupoC[i][7]>mayorC):
            mayorC=grupoC[i][7]     
    
    maximo=max(mayorA,mayorB,mayorC)
    
    
    for i in range(len(grupoA)):
        if(grupoA[i][7]==maximo):
            print("El estudiante",grupoA[i][0],"es de los que tienen mas talleres")       
    for i in range(len(grupoB)):
        if(grupoB[i][7]==maximo):
            print("El estudiante",grupoB[i][0],"es de los que tienen mas talleres")       
    for i in range(len(grupoC)):
        if(grupoC[i][7]==maximo):
            print("El estudiante",grupoC[i][0],"es de los que tienen mas talleres")  
#2.2
def cero_inasistencia(grupoA,grupoB,grupoC):
    for i in range(len(grupoA)):
        if(grupoA[i][4]==0):
            print("El coder",grupoA[i][0]," tiene cero inasistencias")
    for i in range(len(grupoB)):
        if(grupoB[i][4]==0):
            print("El coder",grupoB[i][0]," tiene cero inasistencias")
    for i in range(len(grupoC)):
        if(grupoC[i][4]==0):
            print("El coder",grupoC[i][0]," tiene cero inasistencias")
#2.1
def monitor(grupoA,grupoB,grupoC):
    mayorA=0
    mayorB=0 
    mayorC=0
    
    for i in range(len(grupoA)):
        if(grupoA[i][6]>mayorA):
            mayorA=grupoA[i][6]       
    for i in range(len(grupoB)):
        if(grupoB[i][6]>mayorB):
            mayorB=grupoB[i][6]       
    for i in range(len(grupoC)):
        if(grupoC[i][6]>mayorC):
            mayorC=grupoC[i][6]     
    
    maximo=max(mayorA,mayorB,mayorC)
    
    
    for i in range(len(grupoA)):
        if(grupoA[i][6]==maximo):
            print("El estudiante",grupoA[i][0],"es de los que tienen mas monitorias")       
    for i in range(len(grupoB)):
        if(grupoB[i][6]==maximo):
            print("El estudiante",grupoB[i][0],"es de los que tienen mas monitorias")       
    for i in range(len(grupoC)):
        if(grupoC[i][6]==maximo):
            print("El estudiante",grupoC[i][0],"es de los que tienen mas monitorias")         
#1.6 
def menor_edad(grupoA,grupoB,grupoC):
    
    print("Los coders menores de edad son:")
    for i in grupoA:
        if(i[2]<18):
            print("El coder",i[0],"tiene",i[2],"años, del grupo",i[3],"\n")   
    for i in grupoB:
        if(i[2]<18):
            print("El coder",i[0],"tiene",i[2],"años del grupo",i[3],"\n")
    for i in grupoC:
        if(i[2]<18):
            print("El coder",i[0],"tiene",i[2],"años del grupo",i[3],"\n")
 
def mayor_edad(grupoA,grupoB,grupoC):
    
    print("Los coders mayores de edad son:")
    for i in grupoA:
        if(i[2]>18):
            print("El coder",i[0],"tiene",i[2],"años, del grupo",i[3],"\n")   
    for i in grupoB:
        if(i[2]>18):
            print("El coder",i[0],"tiene",i[2],"años del grupo",i[3],"\n")
    for i in grupoC:
        if(i[2]>18):
            print("El coder",i[0],"tiene",i[2],"años del grupo",i[3],"\n")
        
#1.5
def traslado(coder,grupo):
    grupo.append(coder)
    print("traslado exitoso")
def trasladar_coder(grupoA,grupoB,grupoC):
    quien=input("Quien deseas trasladar? ")
    desde=input("En que grupo esta? (A-B-C)")
    hacia=input("Para que grupo lo vas a trasladar? ")
    if(desde.lower()=="a" and hacia.lower()=="b"):
        for i in range(len(grupoA)):
            if (grupoA[i][0]==quien):
                traslado(grupoA[i],grupoB)
                grupoA.pop(i)
    elif(desde.lower()=="a" and hacia.lower()=="c"):
        for i in range(len(grupoA)):
            if (grupoA[i][0]==quien):
                traslado(grupoA[i],grupoC)
                grupoA.pop(i)
    elif(desde.lower()=="b" and hacia.lower()=="c"):
        for i in range(len(grupoB)):
            if (grupoB[i][0]==quien):
                traslado(grupoB[i],grupoC)
                grupoB.pop(i) 
    elif(desde.lower()=="b" and hacia.lower()=="a"):
        for i in range(len(grupoB)):
            if (grupoB[i][0]==quien):
                traslado(grupoB[i],grupoA)
                grupoB.pop(i) 
    elif(desde.lower()=="c" and hacia.lower()=="a"):
        for i in range(len(grupoC)):
            if (grupoC[i][0]==quien):
                traslado(grupoC[i],grupoA)
                grupoC.pop(i)
    elif(desde.lower()=="c" and hacia.lower()=="b"):
        for i in range(len(grupoC)):
            if (grupoC[i][0]==quien):
                traslado(grupoC[i],grupoB)
                grupoC.pop(i)
#1.4
def listar_coders(grupoA,grupoB,grupoC):
    print("Elije el grupo a listar (escribe el numero)\n",
          "1. Grupo A\n",
          "2. Grupo B\n",
          "3. Grupo C\n"
          )
    opc=input()
    if(opc=="1"):
        for i in grupoA:
            print("Coder:",i[0],"- Mes ingreso:",i[1],"- edad:",i[2],"- grupo:",i[3],"- inasistencias:",i[4])
    elif(opc=="2"):
        for i in grupoB:
            print("Coder:",i[0],"- Mes ingreso:",i[1],"- edad:",i[2],"- grupo:",i[3],"- inasistencias:",i[4])
    elif(opc=="3"):
        for i in grupoC:
            print("Coder:",i[0],"- Mes ingreso:",i[1],"- edad:",i[2],"- grupo:",i[3],"- inasistencias:",i[4])
    else:
        print("Opcion no valida")
#1.3
def eliminar_inasistencia(grupoA,grupoB,grupoC):
    
    for i in range(len(grupoA)):
        if (grupoA[i][4]>15):
            grupoA.pop(i)
    for i in range(len(grupoB)):
        if (grupoB[i][4]>15):
            grupoB.pop(i)
    for i in range(len(grupoC)):
        if (grupoC[i][4]>15):
            grupoC.pop(i)
    print("Se han actualizados los Coders!, cuida tu permanencia")
#1.2
def buscar_repetidos(grupoA,grupoB,grupoC):
    for i in grupoA:
        for ind in grupoB:
            if(i[0]==ind[0]):
                print("El usuario",i[0]," esta en los grupos A y B")
        for inde in grupoC:
            if(i[0]==inde[0]):
                print("El usuario",i[0]," esta en los grupos A y B")
    for i in grupoB:
        for ind in grupoC:
            if(i[0]==ind[0]):
                print("El usuario",i[0]," esta en los grupos B y C")            
#1.1 
def registrar_trainer_a(trainers):
    nombre=input("Ingrese el nombre del Trainer: ")
    edad=int(input("Ingrese la edad del Trainer: "))
    tecnologia=input("Ingrese el area que imparte el Trainer: ")
    trainer=[nombre,edad,tecnologia,"A"]
    trainers.append(trainer)
    print("Se agrego correctamente el Trainer")
#1
def registrarCoder(grupoA,grupoB,grupoC):
    nombre=input("Ingrese el nombre del coder: ")
    mes=input("Ingrese el mes de ingreso: ")
    edad=int(input("Ingrese la edad del Coder: "))
    grupo=input("Ingrese al grupo que pertenece (A - B - C): ")
    inasistencia=int(input("Ingrese el numero de inasistencias del Coder: "))
    participa_clase=int(input("Ingrese el numero de participaciones en clase del Coder: "))
    participa_monitor=int(input("Ingrese el numero de participaciones como monitor del Coder: "))
    num_talleres=int(input("Ingrese el numero de talleres del Coder: "))
    num_colaboracion=int(input("Ingrese el numero de colaboraciones en clase del Coder: "))
    nota_nivelacion=int(input("Ingrese la nota de nivelacion del Coder: "))
    
    coder=[nombre,mes,edad,grupo,inasistencia,participa_clase,participa_monitor,num_talleres,num_colaboracion,nota_nivelacion]
    if(grupo.lower()== "a"):
        grupoA.append(coder)
        print("Se agrego exitosamente el coder")
    elif (grupo.lower()== "b"):
        grupoB.append(coder)
        print("Se agrego exitosamente el coder")
    elif (grupo.lower()== "c"):
        grupoC.append(coder)
        print("Se agrego exitosamente el coder")
    else:
        print("El grupo ingresado no existe")
        
#2.8 Esto es opcional
def trainersOtrosGrupos(trainers):
    trainerC=["Juan Fernando Lopez",28,"FrondEnd","B"]
    trainerB=["Kevin Zapata",38,"BackEnd","C"]
    trainers.append(trainerC)
    trainers.append(trainerB) 

#PUNTO DE ENTRADA DEL PROGRAMA
def main():
    grupo_a=[]
    grupo_b=[]
    grupo_c=[]
    trainers=[]
    trainersOtrosGrupos(trainers)
    while True:      
        input("Presione ENTER para continuar.")
        menu()
        opcion=input("Que deseas hacer? ")
        if(opcion=="1"):
            registrarCoder(grupo_a,grupo_b,grupo_c)
        elif(opcion=="1.1"):
            registrar_trainer_a(trainers)
        elif(opcion=="1.2"):
            buscar_repetidos(grupo_a,grupo_b,grupo_c)
        elif(opcion=="1.3"):
            eliminar_inasistencia(grupo_a,grupo_b,grupo_c)
        elif(opcion=="1.4"):
            listar_coders(grupo_a,grupo_b,grupo_c)
        elif(opcion=="1.4"):
            listar_coders(grupo_a,grupo_b,grupo_c)
        elif(opcion=="1.5"):
            trasladar_coder(grupo_a,grupo_b,grupo_c)
        elif(opcion=="1.6"):
            mayor_edad(grupo_a,grupo_b,grupo_c)
        elif(opcion=="2.1"):
            monitor(grupo_a,grupo_b,grupo_c)
        elif(opcion=="2.2"):
            cero_inasistencia(grupo_a,grupo_b,grupo_c)
        elif(opcion=="2.3"):
            entregas(grupo_a,grupo_b,grupo_c)
        elif(opcion=="2.4"):
            colaborador(grupo_a,grupo_b,grupo_c)
        elif(opcion=="2.5"):
            mayor_nota(grupo_a,grupo_b,grupo_c)
        elif(opcion=="2.6"):
            participativo(grupo_a,grupo_b,grupo_c)
        elif(opcion=="0"):
            break
        else:
            print("Esa opcion no existe")
          
main()