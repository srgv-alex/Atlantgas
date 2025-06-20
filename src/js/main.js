const items = document.querySelectorAll('.content-item');

items.forEach(item => {
	item.addEventListener('click', () => {
		items.forEach(i => i.classList.remove('active'));
		item.classList.add('active');
	});
});
