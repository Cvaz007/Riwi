#Imports

def createa_activity(pending_task):
    try:
        title=input("Como se llamara la ctividad? ")
        description=input("¿Que haras? ")
        date=input("Cuando lo haras? ")
        
        list_to_do= {"title":title,"description":description,"date":date}
        pending_task.append(list_to_do)
        print("Se añadio correctamente")
       
    except:
        print("Hubo un error, vuelve e intentalo")
        
def createa_activity_done(activity,task_done):
    task_done.append(activity)
    print("Se actualizo las actividades realizadas")