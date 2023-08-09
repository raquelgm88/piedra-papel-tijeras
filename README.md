# El Juego de Sheldon - ¡PIEDRA, PAPEL, TIJERAS, LAGARTO, SPOCK!

¡Hola! Este es un proyecto personal basado en el juego del personaje de **Sheldon Cooper** en la serie **_The Big Bang Theory_**.

## En qué consiste

Se trata de una versión del clásico juego **Pidra, Papel o Tijeras**.
A la izquierda de la pantalla hay un esquema que muestra las cinco opciones de juego y las posibles combinaciones ganadoras y perdedoras entre ellas. De esta manera sabremos quién gana a quién.
A la derecha hay cinco imágenes con sus respectivas opciones de juego. El usuario debe seleccionar una de ellas para jugar contra la máquina/Sheldon, que también hará su elección de forma aleatoria.
Una vez que pulse el usuario sobre una de las imágenes, en la pizarra inferior aparecerán tres elementos:

- Un mensaje que indica qué ha escogido la máquina/Sheldon para jugar.
- Otro mensaje que indica si has ganado, empatado o perdido.
- Y por último un botón de **"Volver a jugar"**, que reinicia el juego.

## Desarrollo

Este juego lo he desarrollado con HTML5, SASS y JavaScript. Siguiendo los principios de **diseño _responsive_** y usando el marco de trabajo **_mobile first_**.

Primero he programado unas funciones que hacen que la máquina escoja una opción al azar según se entra en la página web y cuando el usuario pulsa el botón de "Volver a jugar". La opción escogida la podemos ver en la consola de las DevTools del navegador.

Después he generado varias funciones que se ejecutan en el evento que he asignado a las imágenes de las opciones del usuario al hacer click sobre ellas:

- Averiguo en qué imagen se produce el evento.
- Bloqueo el poder hacer click en las cinco opciones
- Pinto el mensaje de la opción elegida por la máquina para que el usuario pueda verla finalmente.
- Hago la comparación de la opción del usuario con la de la máquina y pinto un mensaje indicando si se ha ganado, empatado o perdido.
- Y quito la clase que hacía que el botón de "Volver a jugar" estuviese oculto.

Y por último también he creado otras funciones que se ejecutan con el evento que se produce al hacer click en el botón de "Volver a jugar":

- Vuelvo a genear la opción aleatoria de la máquina.
- La pinto en la consola.
- Dejo vacíos los mensajes que aparecían antes con la opción de la máquina y con el resultado del juego.
- Vuelvo a añadir la clase que oculta el botón.
- Y desbloqueo las opciones del usuario para que se puedan volver a clickar.

## Herramientas utilizadas

- HTML5
- CSS3, SASS
- JavaScript
- NodeJS
- NPM
- Gulp
- Git

## Cómo arrancar el proyecto

Necesitas tener instalado [Node JS](https://nodejs.org/en) para poder arrancar este proyecto.

1. Instala las dependecias locales ejecutando en la terminal el comando:

```
npm install
```

2. Instala el paquete para SASS:

```
npm install node-sass
```

3. Arranca el proyecto ejecutando a continuación en la terminal:

```
npm start
```

Se abrirá [http://localhost:3000 ](http://localhost:3000)para ver el proyecto en el navegador en modo desarrollo.
