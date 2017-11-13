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
text.textContent = texto; //escribe el contenido de la lista
//limpiar input
document.getElementById('text').value = '';
//crear div que contendra nueva lista
var newList = document.createElement('div');
newList.appendChild(cont2);
//crear nodo de texto
var textList = document.createElement('p');
textList.appendChild(newList);
var textN = document.createTextNode(text);
textN.appendChild(textContent);


cont2.insertBefore(text, cont2.childNodes[0]);


//rescatar el texto que ingresara el usuario

});


/*// VARIABLES
var addList = document.getElementsByClassName('principalSection')[0];
var input1 = document.getElementById('inp1');
var input2 = document.getElementsByClassName('listInput')[0];
var close = document.getElementById('close');
var btn = document.getElementById('btn');

//Agregando Evento click para cambiar submit de boton a input
addList.addEventListener('click', function(){
	input1.classList.add('ocult-list');
	input2.classList.remove('ocult-list');
	// Agregando Evento close, para cambiar de input a boton
	close.addEventListener('click', function(){
		input1.classList.remove('ocult-list');
		input2.classList.add('ocult-list');
	});
});

btn.addEventListener('click', function(){
//rescatar el texto que ingresara el usuario
var text = document.getElementById('text').value;
//limpiar input
document.getElementById('text').value = '';
//crear div que contendra nueva lista
var newList = document.createElement('div');
newList.appendChild(addList);
//crear nodo de texto
var textList = document.createElement('p');
newList.appendChild(textList);


//rescatar el texto que ingresara el usuario

});*/