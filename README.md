# Descripcion

Esta aplicación es un gestor de tareas.
Desarrollado en ReactJS, utilizando typescript y estilado con tailwind CSS.

# Instalación del proyecto

-clonar proyecto: git clone https://github.com/AlejoFabianV/tasksFront.git
- cd <directorio>  npm install

# Comandos para correr la aplicación

-npm run dev (vite)

 # URLS importantes:
- http://localhost:5173/ (url de app en local, por defecto vite aloja la app en el puerto 5173)
- https://task-manager-chi-indol.vercel.app/ (app en producción, desplegado en vercel)
- AlejoFabianV/tasksFront (repositorio del frontend)
- AlejoFabianV/Blog-back (repositorio del backend al que pide y envía info este frontend)

# Carpetas
# Api
 task.ts: conexión a la api del backend, cuatro funciones creadas con las rutas a las que debe llamar según lo que se pida. 
  - createTaskRequest (donde espera un JSON para crear la tarea y almacenarla en la base de datos) 
  - getTaskRequest (donde devuelve todas las tareas listadas hasta el momento) -deleteTaskRequest (donde espera un ID para eliminar una tarea permanentemente de la base de datos)
  - updateTaskRequest (donde espera un ID y un JSON para poder actualizar uno o todos los campos de una tarea ya existente)

#Componentes
-TaskList.tsx: devuelve un array listando todas las tareas existentes.
-TaskForm.tsx: encargado del formulario principal para crear una nueva tarea y almacenarla en la base de datos para que se muestre en el listado, también se encarga del filtro de tareas completadas o pendientes. 
Al enviar una petición para almacenar una nueva tarea el método handleSubmit() se encarga de verificar si el título ya existe y si no se está enviando un título sin contenido, si alguna de las dos condiciones no se cumple se envía un mensaje especificando que es lo que está pasando.
handleFilter() encargado de filtrar una lista según si la tarea está pendiente (bool false), si la tarea está completada (bool true) o la lista completa de tareas. Estas listas de pendientes o completadas es solo de lectura no se puede editar o eliminar desde estos filtros, si se quiere hacer debe ser desde el filtro “all”.
TaskItem.tsx: encargado de renderizar cada tarea (item) en la lista, tiene dos estados uno para saber si la tarea se está editando y uno para saber cuando se editó, la edición de la tarea sucede en el mismo ítem (pulsando o haciendo click en el lápiz), cuando se pulse este cambiará a un icono de guardado para cuando se termine la edición. En el ítem también se puede observar un check y un tacho de basura, cada uno con una respectiva tarea, el check indica si la tarea está pendiente (color gris) o si la tarea está completada (check en verde), por otro lado el tacho de basura es para eliminar la tarea, antes de eliminarla se preguntará al usuario si realmente quiere eliminar esa tarea. Ambos son botones por lo que se debe hacer click para su función.
En el ítem se va a visualizar la siguiente información del lado derecho: título, descripción (si la tiene) y la fecha cuando fue creado; del lado izquierdo los botones para cambiar el estado de la tarea de completado a pendiente o viceversa, para editar la tarea o para eliminar la tarea.


