// Tic Tac Toe

var board = [
    ["+", "+", "+"],
    ["+", "+", "+"],
    ["+", "+", "+"]
];

var run = true;
var times = 0;

function main(line, column, id) {
    var identifier = document.getElementById("identifier").value;
	if(times == 9) gameTied();
	if(identifier == "Jogador X" && run == true) {
        player("X", line, column, id);
        document.querySelector("div#player").innerHTML = "Jogador O";
        document.getElementById("identifier").value = "Jogador O";
    } else if(run == true) {
        player("O", line, column, id);
        document.querySelector("div#player").innerHTML = "Jogador X";
        document.getElementById("identifier").value = "Jogador X";
    }
    verify("O");
    verify("X");
}

function player(args, line, column, id) {
    if(board[line][column] == "X" || board[line][column] == "O") {
    	if(args == "X") document.getElementById("jump-o").style.display = "none";
    	else document.getElementById("jump-x").style.display = "none";
        if(run == true) {
        	document.getElementById(`jump-${args.toLowerCase()}`).style.display = "flex";
        }
    } else if(run == true) {
        board[line][column] = args;
		times += 1;
        document.getElementById(id).innerHTML = args;
        document.getElementById("jump-o").style.display = "none";
        document.getElementById("jump-x").style.display = "none";
    }
}

function gameTied() {
    const state = document.querySelector("div#player");
    state.style.backgroundColor = "#d1cf4f";
    state.innerHTML = "Empate!";
    run = false;
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
    } else if(times == 9) {
    	gameTied();
    }
}
