#Import
from config.Route import menu,good_bye,delete_Act,update_Act,add_activity,cross_out,list_pending,list_done

def Main():
    task_done=[]
    pending_task=[]
    
    while True:
        menu()
        option=input("¿Que opcion eliges? ")
        if(option=="1"):
            add_activity(pending_task)
        elif(option=="2"):
            cross_out(task_done,pending_task)
        elif(option=="3"):
            update_Act(pending_task)
        elif(option=="4"):
            list_pending(pending_task)
        elif(option=="5"):
            list_done(task_done)
        elif(option=="6"):
            delete_Act(pending_task)
        elif(option=="0"):
            good_bye()
            break   
        
Main()