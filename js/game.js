var game = game || {};

// TABLERO
game.Tablero = class {

    board = [
        ['╔', '═', '═', '═', '═', '═', '═', '═', '═', '═', '═', '╦', '═', '═', '═', '═', '═', '═', '═', '╦', '═', '═', '═', '═', '═', '═', '═', '═', '═', '═', '╗'],
        ['║', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '║', '•', '•', '•', '•', '•', '•', '•', '║', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '║'],
        ['║', '●', '╔', '═', '╗', '•', '╔', '═', '═', '╗', '•', '║', '•', '╔', '═', '═', '═', '╗', '•', '║', '•', '╔', '═', '═', '╗', '•', '╔', '═', '╗', '●', '║'],
        ['║', '•', '╚', '═', '╝', '•', '╚', '═', '═', '╝', '•', '║', '•', '╚', '═', '═', '═', '╝', '•', '║', '•', '╚', '═', '═', '╝', '•', '╚', '═', '╝', '•', '║'],
        ['║', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '║'],
        ['║', '•', '═', '═', '═', '•', '║', '•', '═', '═', '╦', '═', '═', ' ', '═', '═', '═', ' ', '═', '═', '╦', '═', '═', '•', '║', '•', '═', '═', '═', '•', '║'],
        ['║', '•', '•', '•', '•', '•', '║', '●', '•', '•', '║', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '║', '•', '•', '●', '║', '•', '•', '•', '•', '•', '║'],
        ['╠', '═', '═', '═', '╗', '•', '╠', '═', '═', '•', '║', ' ', '═', '╗', ' ', ' ', ' ', '╔', '═', ' ', '║', '•', '═', '═', '╣', '•', '╔', '═', '═', '═', '╣'],
        ['╠', '═', '═', '═', '╝', '•', '║', '•', '•', '•', ' ', ' ', ' ', '║', ' ', ' ', ' ', '║', ' ', ' ', ' ', '•', '•', '•', '║', '•', '╚', '═', '═', '═', '╣'],
        ['║', '•', '•', '•', '•', '•', '•', '•', '╔', '═', '═', '╗', ' ', '╚', '═', '═', '═', '╝', ' ', '╔', '═', '═', '╗', '•', '•', '•', '•', '•', '•', '•', '║'],
        ['╠', '═', '═', '═', '╗', '•', '║', '•', '║', ' ', ' ', '║', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '║', ' ', ' ', '║', '•', '║', '•', '╔', '═', '═', '═', '╣'],
        ['╠', '═', '═', '═', '╝', '•', '║', '•', '╚', '═', '═', '╝', ' ', '═', '╗', ' ', '╔', '═', ' ', '╚', '═', '═', '╝', '•', '║', '•', '╚', '═', '═', '═', '╣'],
        ['║', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '╚', '═', '╝', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '║'],
        ['║', '●', '╔', '═', '╗', '•', '═', '═', '╗', '•', '╔', '═', '═', '•', '•', '•', '•', '•', '═', '═', '╗', '•', '╔', '═', '═', '•', '╔', '═', '╗', '●', '║'],
        ['║', '•', '╚', '═', '╝', '•', '•', '•', '║', '•', '║', '•', '•', '•', '═', '╦', '═', '•', '•', '•', '║', '•', '║', '•', '•', '•', '╚', '═', '╝', '•', '║'],
        ['║', '•', '•', '•', '•', '•', '║', '•', '•', '•', '•', '●', '║', '•', '•', '•', '•', '•', '║', '●', '•', '•', '•', '•', '║', '•', '•', '•', '•', '•', '║'],
        ['║', '•', '═', '═', '═', '═', '╩', '═', '═', '•', '═', '═', '╩', '═', '═', '•', '═', '═', '╩', '═', '═', '•', '═', '═', '╩', '═', '═', '═', '═', '•', '║'],
        ['║', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '•', '║'],
        ['╚', '═', '═', '═', '═', '═', '═', '═', '═', '═', '═', '═', '═', '═', '═', '═', '═', '═', '═', '═', '═', '═', '═', '═', '═', '═', '═', '═', '═', '═', '╝']
    ]

    generarTablero() {

        for (let i = 0; i < this.board.length; i++) {
            document.getElementById('fila' + i).textContent = "";
        }
        
        document.getElementById('fila')

        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                let td = document.createElement('td');
                td.id = "td" + i + j;
                if (this.board[i][j] == 1) {
                    td.style.fontWeight = 'bold';
                    td.style.fontSize = '20px';
                    td.style.color = 'yellow';
                }
                if (this.board[i][j] == 9) {
                    td.style.fontWeight = 'bold';
                    td.style.color = 'red';
                }
                if (this.board[i][j] == '●') {
                    td.style.fontWeight = 'bold';
                    td.style.color = 'rgb(239, 187, 180)';
                    td.style.fontSize = '28px';
                }
                if (this.board[i][j] == '•') {
                    td.style.fontWeight = 'bold';
                    td.style.color = 'rgb(202, 160, 129)';
                }
                if (this.board[i][j] == '╚' || this.board[i][j] == '═' ||
                    this.board[i][j] == '╝' || this.board[i][j] == '║' ||
                    this.board[i][j] == '╔' || this.board[i][j] == '╗' ||
                    this.board[i][j] == '╩' || this.board[i][j] == '╠' ||
                    this.board[i][j] == '╣' || this.board[i][j] == '╦') {
                    td.style.fontWeight = 'bold';
                    td.style.color = 'blue';
                }
                td.innerHTML += this.board[i][j];
                document.getElementById('fila' + i).appendChild(td);
            }
        }

    }

}

// PACMAN
game.Pacman = class {

    constructor(tablero) {
        this.tablero = tablero;
    }

    generarPacMan() {
        this.tablero.board[17][15] = 1;
        this.tablero.generarTablero();
        // COORDENADAS PACMAN
        this.x = 15;
        this.y = 17;
    }

    movimientoPacMan() {

        // TECLAS
        window.addEventListener("keydown", (event) => {
            fantasma.iniciarFantasmas();
            switch (event.code) {
                // TECLA ARRIBA
                case "ArrowUp":
                    console.log("UP");
                    let up = this.tablero.board[this.y-1][this.x];
                    if (up == '•' || up == '●' || up == ' ') {
                        this.tablero.board[this.y-1][this.x] = 1;
                        this.tablero.board[this.y][this.x] = ' ';
                        this.y--;
                    }
                    this.tablero.generarTablero();
                    break;
                // TECLA IZQUIERDA
                case "ArrowLeft":
                    console.log("LEFT");
                    let left = this.tablero.board[this.y][this.x-1];
                    if (left == '•' || left == '●' || left == ' ') {
                        this.tablero.board[this.y][this.x-1] = 1;
                        this.tablero.board[this.y][this.x] = ' ';
                        this.x--;
                    }
                    this.tablero.generarTablero();
                    break;
                // TECLA ABAJO
                case "ArrowDown":
                    console.log("DOWN");
                    let down = this.tablero.board[this.y+1][this.x];
                    if (down == '•' || down == '●' || down == ' ') {
                        this.tablero.board[this.y+1][this.x] = 1;
                        this.tablero.board[this.y][this.x] = ' ';
                        this.y++;
                    }
                    this.tablero.generarTablero();
                    break;
                // TECLA DERECHA
                case "ArrowRight":
                    console.log("RIGHT");
                    let right = this.tablero.board[this.y][this.x+1];
                    if (right == '•' || right == '●' || right == ' ') {
                        this.tablero.board[this.y][this.x+1] = 1;
                        this.tablero.board[this.y][this.x] = ' ';
                        this.x++;
                    }
                    this.tablero.generarTablero();
                    break;
            }
        })

    }

}

// FANTASMA
game.Fantasma = class {
    
    constructor(tablero, pacMan) {
        this.tablero = tablero;
        this.pacMan = pacMan;
    }

    generarFantasmas() {
        this.coordsFantasmas = [
            //x, y, fantasma
            [14, 8],
            [16, 8],
            [14, 7],
            [16, 7]
        ]
        this.coordsFantasmas.forEach(coord => {
            this.tablero.board[coord[1]][coord[0]] = 9;
        });
        this.tablero.generarTablero();
    }

    movimientoFantasmas() {
        this.coordsFantasmas.forEach(coord => {
            let up = this.tablero.board[coord[1]-1][coord[0]];
            let left = this.tablero.board[coord[1]][coord[0]-1];
            let down = this.tablero.board[coord[1]+1][coord[0]];
            let right = this.tablero.board[coord[1]][coord[0]+1];

            // LEFT Y RIGHT
            if (this.pacMan.x < coord[0]) {
                if (left == '•' || left == '●' || left == ' ' && left != 9) {
                    this.tablero.board[coord[1]][coord[0]-1] = 9;
                    this.tablero.board[coord[1]][coord[0]] = ' ';
                    coord[0]--;
                }
                
            } else {
                if (right == '•' || right == '●' || right == ' ' && right != 9) {
                    this.tablero.board[coord[1]][coord[0]+1] = 9;
                    this.tablero.board[coord[1]][coord[0]] = ' ';
                    coord[0]++;
                }
            }

            // UP Y DOWN
            if (this.pacMan.y < coord[1]) {
                if (up == '•' || up == '●' || up == ' ' && up != 9) {
                    this.tablero.board[coord[1]-1][coord[0]] = 9;
                    this.tablero.board[coord[1]][coord[0]] = ' ';
                    coord[1]--;
                }
            } else {
                if (down == '•' || down == '●' || down == ' ' && down != 9) {
                    this.tablero.board[coord[1]+1][coord[0]] = 9;
                    this.tablero.board[coord[1]][coord[0]] = ' ';
                    coord[1]++;
                }
            }
        });
    }

    iniciarFantasmas() {
        this.movimientoFantasmas();
        this.tablero.generarTablero();
    }

}

// JUEGO
game.Juego = class {

    constructor(tablero, pacMan, fantasma) {
        this.tablero = tablero;
        this.pacMan = pacMan;
        this.fantasma = fantasma;
    }

    jugar() {
        this.tablero.generarTablero();
        this.pacMan.generarPacMan();
        this.pacMan.movimientoPacMan();
        this.fantasma.generarFantasmas();
    }

}