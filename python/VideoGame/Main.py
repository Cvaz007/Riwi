#Imports
import random
from config.Routes import welcome,answer,show_question,questions

def Main():
    quizz=questions() 
    cont=0
    welcome()
    while True:      
        num_random=random.randint(0, 19)  
        show_question(num_random,quizz)
        cont+= answer(num_random,quizz)
        
        option=input("Desea continuar jugando? (S/N) ")
        if(option.lower()=="n"):
            break
    print("Tu puntaje fue ",cont)
    
    
Main()