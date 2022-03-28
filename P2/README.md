FUNCIONAMIENTO DE LA CALCULADORA:

La máquina de estados que he implementado tiene 5 estados: INIT, OP1, OPERATION, OP2 y COMA están definidos de esta forma:

    INIT: 0, (estado inicial)
    OP1: 1, (estado en el que se introduce un dígito)
    OPERATION: 2, (estado en el que se opera)
    OP2: 3, (estado en el que se introduce un dígito después de un signo)
    COMA: false, (se pulsa la coma)
	
	
La calculadora comienza con el estado INIT y COMA = false.

Cuando se pulsa un dígito:
	si está en estado INIT, se muestra en el display y cambia a OP1.
	si está en estado OPERATION cambia a estado OP2.
	si está en estado OP1, OP2 u OPERATION permite introducir otro dígito y carga el estado anterior.
	
Cuando se pulsa un signo:
	Si no se ha introducido antes un dígito o está en estado OP2 no hace nada (estado INIT).
	Si está en estado OP1(se ha introducido un dígito previamente), cambia al estado OPERATION. En el estado OPERATION sólo está permitido introducir de nuevo un dígito.
	
Cuando se evalúa la expresión:
	si está en estado OP2 realiza el cálculo y lo muestra en el display, vuelve al estado OP1 y COMA = false.

Cuando se pulsa AC:
	muestra 0 en el display, vulve a estado INIT y coma = false.

Cuando se pone una coma:
	Si no se ha introducido antes se muestra en el display y cambia de estada a COMA = true.
	Si está en el estado COMA = true, únicamente permite introducir dígitos.
	
Cuando se pulsa CLEAR:
	Se borra lo último que aparece en el display y vuelve al estado anterior.
	
Que COMA esté en 'false' significa que si se pulsa su botón aparece en el display (está disponible).
Cuando se pulsa una coma, COMA cambia a 'true' por lo que no se puede volver a poner hasta que la máquina entre en el estado OP2, por lo que ya se ha introducido un operador y un nuevo dígito.
