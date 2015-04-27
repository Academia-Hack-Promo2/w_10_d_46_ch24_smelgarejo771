var player1 = "Uno";
var player2 = "Dos";
var currentPlayer = new Array;
currentPlayer.push(player1);
currentPlayer.push(player2);
var simb = "0";
var i = 0

var c1f1 
c1f1 = document.vieja.c1f1.value
var c1f2 
c1f2 = document.vieja.c1f2.value
var c1f3 
c1f3 = document.vieja.c1f3.value
var c2f1 
c2f1 = document.vieja.c2f1.value
var c2f2 
c2f2 = document.vieja.c2f2.value
var c2f3 
c2f3 = document.vieja.c2f3.value
var c3f1 
c3f1 = document.vieja.c3f1.value
var c3f2 
c3f2 = document.vieja.c3f2.value
var c3f3 
c3f3 = document.vieja.c3f3.value

document.getElementById("titulo").innerHTML = "jugador " + currentPlayer[i] + " es su turno"

function juego1 () {
	if (c1f1 == " "){	
		if (simb == "0"){
			jugada = "X";
		}else{
			jugada = "0";
		}
		c1f1 = jugada
		document.getElementById('b1').value = jugada;
		document.getElementById('b1').innerHTML = jugada;
		checkwinner (simb,currentPlayer[i])
		changecurrentPlayer();
		if (simb == "X"){
			simb = "0";
		}else{
			simb = "X";
		}
	}
}

function juego2 () {
	if (c1f2 == " "){	
		if (simb == "0"){
			jugada = "X";
		}else{
			jugada = "0";
		}
		c1f2 = jugada
		document.getElementById('b2').value = jugada;
		document.getElementById('b2').innerHTML = jugada;
		if (simb == "X"){
			simb = "0";
		}else{
			simb = "X";
		}
		checkwinner (simb,currentPlayer[i]);
		changecurrentPlayer();
	}
}

function juego3 () {
	if (c1f3 == " "){	
		if (simb == "0"){
			jugada = "X";
		}else{
			jugada = "0";
		}
		c1f3 = jugada
		document.getElementById('b3').value = jugada;
		document.getElementById('b3').innerHTML = jugada;
		if (simb == "X"){
			simb = "0";
		}else{
			simb = "X";
		}
		checkwinner (simb,currentPlayer[i]);
		changecurrentPlayer();
	}
}

function juego4 () {
	if (c2f1 == " "){	
		if (simb == "0"){
			jugada = "X";
		}else{
			jugada = "0";
		}
		c2f1 = jugada
		document.getElementById('b4').value = jugada;
		document.getElementById('b4').innerHTML = jugada;
		if (simb == "X"){
			simb = "0";
		}else{
			simb = "X";
		}
		checkwinner (simb,currentPlayer[i]);
		changecurrentPlayer();
	}
}

function juego5 () {
	if (c2f2 == " "){	
		if (simb == "0"){
			jugada = "X";
		}else{
			jugada = "0";
		}
		c2f2 = jugada
		document.getElementById('b5').value = jugada;
		document.getElementById('b5').innerHTML = jugada;
		if (simb == "X"){
			simb = "0";
		}else{
			simb = "X";
		}
		checkwinner (simb,currentPlayer[i]);
		changecurrentPlayer();
	}
}

function juego6 () {
	
	if (c2f3 == " "){	
		if (simb == "0"){
			jugada = "X";
		}else{
			jugada = "0";
		}
		c2f3 = jugada
		document.getElementById('b6').value = jugada;
		document.getElementById('b6').innerHTML = jugada;
		if (simb == "X"){
			simb = "0";
		}else{
			simb = "X";
		}
		checkwinner (simb,currentPlayer[i]);
		changecurrentPlayer();
	}
}

function juego7 () {
	if (c3f1 == " "){	
		if (simb == "0"){
			jugada = "X";
		}else{
			jugada = "0";
		}
		c3f1 = jugada
		document.getElementById('b7').value = jugada;
		document.getElementById('b7').innerHTML = jugada;
		if (simb == "X"){
			simb = "0";;
		}else{
			simb = "X";
		}
		checkwinner (simb,currentPlayer[i]);
		changecurrentPlayer();
	}
}

function juego8 () {
	if (c3f2 == " "){	
		if (simb == "0"){
			jugada = "X";
		}else{
			jugada = "0";
		}
		c3f2 = jugada
		document.getElementById('b8').value = jugada;
		document.getElementById('b8').innerHTML = jugada;
		if (simb == "X"){
			simb = "0";
		}else{
			simb = "X";
		}
		checkwinner (simb,currentPlayer[i]);
		changecurrentPlayer();
	}
}

function juego9 () {
	if (c3f3 == " "){	
		if (simb == "0"){
			jugada = "X";
		}else{
			jugada = "0";
		}
		c3f3 = jugada
		document.getElementById('b9').value = jugada;
		document.getElementById('b9').innerHTML = jugada;
		if (simb == "X"){
			simb = "0";
		}else{
			simb = "X";
		}
		checkwinner (simb,currentPlayer[i]);
		changecurrentPlayer();
	}
}

function checkwinner (k,currentPlayer){

	if((c1f1 == c1f2 && c1f3 == c1f1 && k == c1f1)||
		(c2f1 == c2f2 && c2f3 == c2f1 && k == c2f1)||
		(c3f1 == c3f2 && c3f3 == c3f1 && k == c3f1)||
		(c1f1 == c2f1 && c3f1 == c1f1 && k == c1f1)||
		(c1f2 == c2f2 && c3f2 == c1f2 && k == c1f2)||
		(c1f3 == c2f3 && c3f3 == c1f3 && k == c1f3)||
		(c1f1 == c2f2 && c3f3 == c1f1 && k == c1f1)||
		(c1f3 == c2f2 && c3f1 == c1f3 && k == c1f3))
	{
		alert(currentPlayer);
	}else{
		console.log("no");
	}
}

function changecurrentPlayer () {
	console.log(i)
	if (i == 0){
		i = 1;
	}else{
		i = 0;
	}
	console.log(i)
	document.getElementById("titulo").innerHTML = "jugador " + currentPlayer[i] + " es su turno";
}