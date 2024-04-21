#Imports
from config.Route import list_pending,add_activity_done


def activity_done(task_done,pending_task):
    list_pending(pending_task)
    element={}
    if (not pending_task):
        print("No existen tareas pendientes")
    else:
        index=int(input("Ingrese el indice de la actividad a tachar "))
        try:
            if(index < 0 or index > 6):
                print('el indice no existe')
            else:
                print("Actividad tachada")
                for ind,val in enumerate(pending_task):
                    if(ind==int(index)):
                        element={"title":val["title"],"description":val["description"],"date":val["date"]}
                add_activity_done(element,task_done)
                pending_task.pop(index)
        except:
            print("Surgio un error")

def delete_Activity(task):
    list_pending(task)
    if (not task):
        print("No existen tareas pendientes")
    else:
        index=int(input("Ingrese el indice de la actividad a eliminar "))
        try:
            if(index < 0 or index > 6):
                print('el indice no existe')
            else:
                task.pop(index)
                print("Actividad eliminada")      
        except:
            print("Surgio un error de eliminacion")