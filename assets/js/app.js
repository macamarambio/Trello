//Agregando Evento click para cambiar submit de boton a input
var boton = document.getElementsByClassName('clk')

function addList() {
	var text = document.getElementById('submit1');
	var text2 = document.getElementById('submit2');

	if(text.classList.contains('show-list') && text2.classList.contains('ocult-list')){
		// cambiando texto 1 de visible a invisible
		text.classList.remove('show-list');
		text.classList.add('ocult-list');
		// cambiando texto 2 de invisible a visible
		text2.classList.remove('ocult-list');
		text2.classList.add('show-list');
	}else{
		text.classList.remove('ocult-list');
		text.classList.add('show-list');

		text2.classList.remove('show-list');
		text2.classList.add('ocult-list');
	}
};

boton.addEventListener('click', addList)
 


  	/*//Agregando Evento click para cambiar submit de boton a input
 document.addEventListener ('click', function addList() {
	var text = getElementById ('submit1');
	var text2 = getElementById ('submit2');

	if(text.classList.contains ('show-list') && text2.classList.contains('ocult-list')){
		// cambiando texto 1 de visible a invisible
		text.classList.remove ('show-list');
		text.classList.add ('ocult-list');
		// cambiando texto 2 de invisible a visible
		text2.classList.remove ('ocult-list');
		text2.classList.add ('show-list');
	}else{
		text.classList.remove ('ocult-list');
		text.classList.add ('show-list');

		text2.classList.remove ('show-list');
		text2.classList.add ('ocult-list');
	}
});*/



