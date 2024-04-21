#Imports


def list_activities(task):
    if (not task):
        print("No hay tareas pendientes \n")
    else:
        print("Lista de tareas pendientes\n")
        for index, value in enumerate(task):
            print(index,'. -', value['title'], ':',value['description'], ' - ',value['date'],'\n')
    
def list_activities_done(task_done):
    if (not task_done):
        print("No hay tareas pendientes \n")
    else:
        print("Lista de tareas pendientes\n")
        for index, value in enumerate(task_done):
            print(index,'. -', value['title'], ':',value['description'], ' - ',value['date'],'\n')

    