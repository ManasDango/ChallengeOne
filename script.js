function encriptar(){
	var texto = document.getElementById("inputtx").value.toLowerCase();
	var txcifrado = texto.replace(/a/igm,"ai");
	var txcifrado = txcifrado.replace(/e/igm,"enter");
	var txcifrado = txcifrado.replace(/i/igm,"imes");
	var txcifrado = txcifrado.replace(/o/igm,"ober");
	var txcifrado = txcifrado.replace(/u/igm,"ufat");

	document.getElementById("muñeco").style.display = "none";
	document.getElementById("text").style.display = "none";
	document.getElementById("texta").innerHTML = txcifrado;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
	var texto = document.getElementById("inputtx").value.toLowerCase();
	var txcifrado = texto.replace(/ai/igm,"a");
	var txcifrado = txcifrado.replace(/enter/igm,"e");
	var txcifrado = txcifrado.replace(/imes/igm,"i");
	var txcifrado = txcifrado.replace(/ober/igm,"o");
	var txcifrado = txcifrado.replace(/ufat/igm,"u");

	document.getElementById("muñeco").style.display = "none";
	document.getElementById("text").style.display = "none";
	document.getElementById("texta").innerHTML = txcifrado;
	document.getElementById("copy").style.display = "show";
	document.getElementById("copy").style.display = "inherit";
}

function copy(){
	var contenido = document.querrySelector(#texta);
	contenido.select();
	document.execCommand("cut");
	alert(!Se copio!);
}
