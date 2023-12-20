var text = document.getElementById('judul');
text.innerHTML = "Contoh Penerapan Eksternal JS dan inner HTML";

var text = document.getElementById('sub-judul').style.fontFamily = "Algerian";
var text = document.getElementById('sub-judul').style.color = "seagreen";
var text = document.getElementById('sub-judul').style.animation = "atasbawah 4s ease";


function darkMode()
{
	document.body.style.backgroundColor = "#333";
	document.body.style.color = "#fff"
}

function lightMode()
{
	document.body.style.color = "#333"
	document.body.style.backgroundColor = "#fff";
}