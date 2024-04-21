import random

def lanzar_dado():
    return random.randint(1,6)

def lanzamiento_computadora():
    return lanzar_dado()

def ganador(turnos,jugadores):
    ganador=max(turnos)
    if(turnos.count(ganador)==1):
        for i in range(len(turnos)):
            if(ganador == turnos[i]):
                jugadores.append(i)
    else:
        print("Fue un empate")
    
def jugar_turno():
    saldo_computadora=100
    saldo_jugador=100
    turno_ganado=[]
    
    bandera=True
    num_jugadores=int(input("Cuantos jugadores hay? "))
    while bandera: 
        resultado=[]
        resultado.append(lanzamiento_computadora())
        
        for i in range(num_jugadores):
            resultado.append(lanzar_dado())  
            
        ganador(resultado,turno_ganado)
        
        for id in range(num_jugadores):
            if(turno_ganado.count(id)>2):
                print("El jugador ganador es ",id)
                bandera=False
        
jugar_turno()
            
        
            
    
    