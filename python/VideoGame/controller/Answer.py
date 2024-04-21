#Imports 

def get_answer(index,quizz):
    answer= input("Cual es tu respuesta? ")
    if (answer.upper() == quizz[index]["answer"]):
        return 1
    else:
        return 0
