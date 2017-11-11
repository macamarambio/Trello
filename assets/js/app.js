// VARIABLES PRINCIPALES
var agregarLista = document.getElementsByClassName('principalSection')[0];
var input1 = document.getElementById('inp1');
var input2 = document.getElementsByClassName('listInput')[0];
//Agregando Evento click para cambiar submit de boton a input



agregarLista.addEventListener('click', function(){
	input1.classList.add('ocult-list');
	input2.classList.remove('ocult-list');

});
	


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



