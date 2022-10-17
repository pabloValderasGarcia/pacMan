let tablero = new game.Tablero();
let pacMan = new game.Pacman(tablero);
let juego = new game.Juego(tablero, pacMan);
juego.jugar();