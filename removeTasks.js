export const deleted = document.createElement('img');
deleted.src = 'img/borrar.png';
deleted.classList.add('delet');
deleted.addEventListener('click', () => {
	li.remove();
});
