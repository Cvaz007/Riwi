#Imports
from config.Route import list_pending

def update_activity(task):
    list_pending(task)
    if (not task):
        print("No existen tareas pendientes")
    else: 
        index=int(input("Ingrese el indice de la actividad a tachar "))
        try:
            if(index < 0 or index > 6):
                print('el indice no existe')
            else:
                title=input("Como se llamara la ctividad? ")
                description=input("¿Que haras? ")
                date=input("Cuando lo haras? ")
                
                task[index]["title"]=title
                task[index]["description"]=description
                task[index]["date"]=date
                
                print("Actividad actualizada")
                
        except:
            print("Surgio un error")