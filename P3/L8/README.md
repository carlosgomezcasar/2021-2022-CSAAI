FUNCIONAMIENTO DEL VIDEOJUEGO:


Se define el canvas, los ladrillos, la bola y la raqueta con sus respectivas características.

-Ladrillos:
Se definen los ladrillos en 13 columnas y 5 filas.
Los ladrillos comienzan siendo visibles y se vuelven invisibles al colisionar con la bola, a demás, 'score' aumenta 1.

-Raqueta:
Se define que con la flecha izquierda se mueve a la izquierda y con la flecha derecha se mueve hacia la derecha y los límites de moviento hacia ambos lados los cuales son las paredes del canvas.

-Bola:
Se define la posición inicial de la bola y sus dimensiones


FUNCIÓN PRINCIPAL:

Se define el rebote de la bola cuando toca los límites laterales y superior del canvas. Cuando toca el límite inferior la bola vuelve a sus coordenadas iniciales y el contador de vidas disminuye 1.

Cuando el contador de vidas llega a cero aparece una imagen indicando que has perdido y el botón de 'Play again'.

Cuando 'score' llega a 65 (se han destruido todos los ladrillos) aprece una imagen de victoria y el botón de 'Play again'.

Se define la posición de los contadores de vidas y de puntuación (score).

Se define el ángulo de colisión con la raqueta.


MEJORAS:

	-Botón de 'Play again' tras perder o ganar la partida que recarga la página para volver a jugar.

	-Cambio del águlo de rebote de la bola al golpear en la raqueta.
		
