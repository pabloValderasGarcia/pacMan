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
        this.tablero.board[17][15] = '1';
        this.tablero.generarTablero();
    }

    posicionPacMan() {
        let posicionPacMan = "";
        for (let i = 0; i < this.tablero.board.length; i++) {
            for (let j = 0; j < this.tablero.board[i].length; j++) {
                if (this.tablero.board[i][j] == '1') {
                    posicionPacMan = i + " " + j;
                    return posicionPacMan;
                }
            }
        }
    }

    movimientoPacMan() {

        window.addEventListener("keydown", (event) => {
            let posicion = this.posicionPacMan().split(' ');
            switch (event.code) {
                case "ArrowUp":
                    console.log("UP");
                    posicion = this.posicionPacMan().split(' ');
                    if (this.tablero.board[posicion[0] - 1][posicion[1]] != '╚' &&
                        this.tablero.board[posicion[0] - 1][posicion[1]] != '╗' &&
                        this.tablero.board[posicion[0] - 1][posicion[1]] != '═' &&
                        this.tablero.board[posicion[0] - 1][posicion[1]] != '║' &&
                        this.tablero.board[posicion[0] - 1][posicion[1]] != '╦' &&
                        this.tablero.board[posicion[0] - 1][posicion[1]] != '╝') {
                        this.tablero.board[posicion[0] - 1][posicion[1]] = '1';
                        this.tablero.board[posicion[0]][posicion[1]] = ' ';
                    }
                    this.tablero.generarTablero();
                    break;
                case "ArrowLeft":
                    console.log("LEFT");
                    posicion = this.posicionPacMan().split(' ');
                    if (this.tablero.board[posicion[0]][posicion[1] - 1] != '╗' &&
                        this.tablero.board[posicion[0]][posicion[1] - 1] != '═' &&
                        this.tablero.board[posicion[0]][posicion[1] - 1] != '║' &&
                        this.tablero.board[posicion[0]][posicion[1] - 1] != '╝') {
                        this.tablero.board[posicion[0]][posicion[1] - 1] = '1';
                        this.tablero.board[posicion[0]][posicion[1]] = ' ';
                    }
                    this.tablero.generarTablero();
                    break;
                case "ArrowDown":
                    console.log("DOWN");
                    posicion = this.posicionPacMan().split(' ');
                    if (this.tablero.board[parseInt(posicion[0]) + 1][posicion[1]] != '╗' &&
                        this.tablero.board[parseInt(posicion[0]) + 1][posicion[1]] != '═' &&
                        this.tablero.board[parseInt(posicion[0]) + 1][posicion[1]] != '║' &&
                        this.tablero.board[parseInt(posicion[0]) + 1][posicion[1]] != '╦' &&
                        this.tablero.board[parseInt(posicion[0]) + 1][posicion[1]] != '╔') {
                        this.tablero.board[parseInt(posicion[0]) + 1][posicion[1]] = '1';
                        this.tablero.board[posicion[0]][posicion[1]] = ' ';
                    }
                    this.tablero.generarTablero();
                    break;
                case "ArrowRight":
                    console.log("RIGHT");
                    posicion = this.posicionPacMan().split(' ');
                    if (this.tablero.board[posicion[0]][parseInt(posicion[1]) + 1] != '╚' &&
                        this.tablero.board[posicion[0]][parseInt(posicion[1]) + 1] != '═' &&
                        this.tablero.board[posicion[0]][parseInt(posicion[1]) + 1] != '║' &&
                        this.tablero.board[posicion[0]][parseInt(posicion[1]) + 1] != '╔' &&
                        this.tablero.board[posicion[0]][parseInt(posicion[1]) + 1] != 1) {
                        this.tablero.board[posicion[0]][parseInt(posicion[1]) + 1] = '1';
                        this.tablero.board[posicion[0]][posicion[1]] = ' ';
                    }
                    this.tablero.generarTablero();
                    break;
            }
        })

        // ARRIBA
        document.getElementById("up").onclick = () => {
            console.log("UP");
            let posicion = this.posicionPacMan().split(' ');
            if (this.tablero.board[posicion[0] - 1][posicion[1]] != '╚' &&
                this.tablero.board[posicion[0] - 1][posicion[1]] != '╗' &&
                this.tablero.board[posicion[0] - 1][posicion[1]] != '═' &&
                this.tablero.board[posicion[0] - 1][posicion[1]] != '║' &&
                this.tablero.board[posicion[0] - 1][posicion[1]] != '╦' &&
                this.tablero.board[posicion[0] - 1][posicion[1]] != '╝') {
                this.tablero.board[posicion[0] - 1][posicion[1]] = '1';
                this.tablero.board[posicion[0]][posicion[1]] = ' ';
            }
            this.tablero.generarTablero();
        }

        // IZQUIERDA
        document.getElementById("left").onclick = () => {
            console.log("LEFT");
            let posicion = this.posicionPacMan().split(' ');
            if (this.tablero.board[posicion[0]][posicion[1] - 1] != '╗' &&
                this.tablero.board[posicion[0]][posicion[1] - 1] != '═' &&
                this.tablero.board[posicion[0]][posicion[1] - 1] != '║' &&
                this.tablero.board[posicion[0]][posicion[1] - 1] != '╝') {
                this.tablero.board[posicion[0]][posicion[1] - 1] = '1';
                this.tablero.board[posicion[0]][posicion[1]] = ' ';
            }
            this.tablero.generarTablero();
        }

        // DERECHA
        document.getElementById("down").onclick = () => {
            console.log("DOWN");
            let posicion = this.posicionPacMan().split(' ');
            if (this.tablero.board[parseInt(posicion[0]) + 1][posicion[1]] != '╗' &&
                this.tablero.board[parseInt(posicion[0]) + 1][posicion[1]] != '═' &&
                this.tablero.board[parseInt(posicion[0]) + 1][posicion[1]] != '║' &&
                this.tablero.board[parseInt(posicion[0]) + 1][posicion[1]] != '╦' &&
                this.tablero.board[parseInt(posicion[0]) + 1][posicion[1]] != '╔') {
                this.tablero.board[parseInt(posicion[0]) + 1][posicion[1]] = '1';
                this.tablero.board[posicion[0]][posicion[1]] = ' ';
            }
            this.tablero.generarTablero();
        }

        // ABAJO
        document.getElementById("right").onclick = () => {
            console.log("RIGHT");
            let posicion = this.posicionPacMan().split(' ');
            if (this.tablero.board[posicion[0]][parseInt(posicion[1]) + 1] != '╚' &&
                this.tablero.board[posicion[0]][parseInt(posicion[1]) + 1] != '═' &&
                this.tablero.board[posicion[0]][parseInt(posicion[1]) + 1] != '║' &&
                this.tablero.board[posicion[0]][parseInt(posicion[1]) + 1] != '╔' &&
                this.tablero.board[posicion[0]][parseInt(posicion[1]) + 1] != 1) {
                this.tablero.board[posicion[0]][parseInt(posicion[1]) + 1] = '1';
                this.tablero.board[posicion[0]][posicion[1]] = ' ';
            }
            this.tablero.generarTablero();
        }

    }

}

// FANTASMA
game.Fantasma = class {}

// JUEGO
game.Juego = class {

    constructor(tablero, pacMan) {
        this.tablero = tablero;
        this.pacMan = pacMan;
    }

    jugar() {
        this.tablero.generarTablero();
        this.pacMan.generarPacMan();
        this.pacMan.movimientoPacMan();
    }

}