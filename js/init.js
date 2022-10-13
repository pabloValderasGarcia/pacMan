let tablero = new game.Tablero();
let pacMan = new game.Pacman(tablero);
let fantasma = new game.Fantasma(tablero);
let juego = new game.Juego(tablero, pacMan, fantasma);
juego.jugar();