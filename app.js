const input = document.querySelector('#input-text');
const buttonTask = document.querySelector('#button');
const listContainer = document.querySelector('#list-container');
const form = document.querySelector('#form');
const background = document.querySelector('#backg');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const inputValue = input.value.trim();

	if (inputValue === '') {
		input.placeholder = 'Error ingrese una tarea';
		input.classList.add('error');
	} else {
		input.placeholder = '';
		input.value = '';
		input.classList.remove('error');
		addTasks(inputValue);
	}
});

const addTasks = (task) => {
	//se agrega el Checkbox al li
	const checkbox = document.createElement('input');
	checkbox.setAttribute('type', 'checkbox');
	//agregar el tachado a un texto
	checkbox.addEventListener('click', () => {
		if (checkbox.checked) {
			li.classList.add('check');
		} else {
			li.classList.remove('check');
		}
	});
	// se crea los li donde se guardan las tareas
	const span = document.createElement('span');
	const li = document.createElement('li');
	span.innerText = task;
	li.classList.add('box-li');
	//se crea el boton deleted para eliminar los li
	const deleted = document.createElement('img');
	deleted.src = 'img/borrar.png';
	deleted.classList.add('delet');
	deleted.addEventListener('click', () => {
		li.remove();
	});

	li.appendChild(checkbox);
	li.appendChild(span);
	li.appendChild(deleted);
	listContainer.appendChild(li);
};
