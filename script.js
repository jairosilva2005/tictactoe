// Tic Tac Toe

var board = [
    ["+", "+", "+"],
    ["+", "+", "+"],
    ["+", "+", "+"]
];

var run = true;

function main(line, column, id) {
    var identifier = document.getElementById("identifier").value;
    if(identifier == "Jogador X" && run == true) {
        playerX(line, column, id);
        document.querySelector("div#player").innerHTML = "Jogador O";
        document.getElementById("identifier").value = "Jogador O";
    } else if(run == true) {
        playerO(line, column, id);
        document.querySelector("div#player").innerHTML = "Jogador X";
        document.getElementById("identifier").value = "Jogador X";
    }
    verify("O");
    verify("X");
}

function playerX(line, column, id) {
    if(board[line][column] == "O" || board[line][column] == "X") {
        document.getElementById("jump-o").style.display = "none";
        if(run == true) {
        	document.getElementById("jump-x").style.display = "flex";
        }
    } else if(run == true) {
        board[line][column] = "X";
        document.getElementById(id).innerHTML = "X";
        document.getElementById("jump-x").style.display = "none";
        document.getElementById("jump-o").style.display = "none";
    }
}

function playerO(line, column, id) {
    if(board[line][column] == "X" || board[line][column] == "O") {
        document.getElementById("jump-x").style.display = "none";
        if(run == true) {
        	document.getElementById("jump-o").style.display = "flex";
        }
    } else if(run == true) {
        board[line][column] = "O";
        document.getElementById(id).innerHTML = "O";
        document.getElementById("jump-o").style.display = "none";
        document.getElementById("jump-x").style.display = "none";
    }
}

function verify(args) {
	function winner() {
        const state = document.querySelector("div#player");
        state.style.backgroundColor = "#30D16B";
        state.innerHTML = `Jogador ${args} venceu!`;
        run = false;
    }
    
    if(board[0][0] == args && board[0][1] == args && board[0][2] == args) {
        winner();
    } else if(board[1][0] == args && board[1][1] == args && board[1][2] == args) {
        winner();
    } else if(board[2][0] == args && board[2][1] == args && board[2][2] == args) {
        winner();
    }
    
    if(board[0][0] == args && board[1][0] == args && board[2][0] == args) {
        winner();
    } else if(board[0][1] == args && board[1][1] == args && board[2][1] == args) {
        winner();
    } else if(board[0][2] == args && board[1][2] == args && board[2][2] == args) {
        winner();
    }
    
    if(board[0][0] == args && board[1][1] == args && board[2][2] == args) {
        winner();
    } else if(board[0][2] == args && board[1][1] == args && board[2][0] == args) {
        winner();
    }
}
