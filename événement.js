var objet = document.getElementById("objet");
function hauteur() {
	document.getElementById("objet").style.height = objet.clientheight + 5 + "px"
	// var height = clientheight;
	// if (height=450)
	// 	alert("Vous avez atteint la hauteur maximale");
	// else{
	// 	objet.style.height = height + 5 + "px";

	// }
}


var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

btn2.onclick = () => (objet.style.backgroundColor = "rgb(224, 15, 15)");
btn3.onclick = () => (objet.style.backgroundColor = "rgb(11, 11, 182)");


function visibilite(objet, etat) {
	document.getElementById(objet).style.visibility = etat;
}