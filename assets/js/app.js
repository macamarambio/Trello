// VARIABLES
var input = document.getElementById('inp1');
var input2 = document.getElementsByClassName('listInput')[0];
var close = document.getElementById('close');
var btn = document.getElementById('btn');
var cont2 = document.getElementById('cont2');

//Agregando Evento click para cambiar submit de boton a input
input.addEventListener('click', function(){
	input.classList.add('ocult-list');
	input2.classList.remove('ocult-list');
});

// Agregando Evento close, para cambiar de input a boton
close.addEventListener('click', function(){
	input2.classList.add('ocult-list');
	input.classList.remove('ocult-list');
});

// Agregando lista
btn.addEventListener('click', function(){
//rescatar el texto que ingresara el usuario
var text = document.getElementById('text').value;
text.textContent = text; //escribe el contenido de la lista
//limpiar input
document.getElementById('text').value = '';

var textN = document.createTextNode(text);
var newList = document.createElement('div');
var textList = document.createElement('p');



textList.appendChild(textN);
newList.appendChild(textList);
cont2.appendChild(newList);



//rescatar el texto que ingresara el usuario

});

