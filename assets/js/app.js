var boton = document.getElementById('btn');

//Agregando Evento click para cambiar submit de boton a input
function addList() {
	var text = getElementById('submit-1');

	if(text.classList.contains('show-list')){
		text.classList.remove('show-list');
		menu.classList.add('ocult-list');
	}else{
		text.classList.remove('ocult-list');
		text.classList.add('show-list');
	}
}

 boton.addEventListener('click', addList);