# Comandos de git

## Comando para ver la versión de git

- git -v
- git --version

## Comandos para configuración inicial de git

- git config --global user.name "Your name"
- git config --global user.email "Your email"

## Comando para editar o ver la configuracion de git

Para salir del edit ctrl + o y Ctrl + X
y si es VIM esc y :wq

- git config --global --edit
- git config --global --list

## Como iniciar git en un directorio

- git init

## Comando para saber el estado de nuestros archivos

- git status

## Comando para listar las versiones de mi proyecto

- git log
- git log --oneline

## Comando para cambiar de versión

- git checkout <Id del commit o nombre de la rama>

## Pasos para crear un versión de nuestro código

1. Agregar todos los archivos al commit

- git add .
- git add \*.js
- git add styles.css

2. Tomar la foto del código (Crear una nueva versión)

- git commit -m "Nombre del commit"

# Comando para listar las ramas de mi repositorio

git branch
git branch -v

# Comando para crear una rama

git branch nombre_rama

# Comando para cambiar de ramas

git checkout nombre_rama
git switch nombre_rama
git checkout -b nombre_rama (Crea la rama y hace el cambio)

# Comando para eliminar una rama

git branch -D nombre_rama

# Comando para cambiar el nombre de una rama

git branch -M nuevo_nombre

# Comando para conectar mi git local con git en la nube

git remote add nombre_conexion url_conexion

# Comando para clonar o traer un repositorio de git remoto

git clone url_conexion

# Comando para listar las conexiones remotas

git remote -v

# Comando para eliminar una conexion remota

git remote remove nombre_conexion

# Comando para enviar informacion al git remoto

git push
git push nombre_conexion nombre_rama
git push -u nombre_conexion nombre_rama
git push --all

# Comando para obtener cambios o la informacion que hay en el git remoto

git pull
git pull nombre_conexion nombre_rama

## Titulo 2
