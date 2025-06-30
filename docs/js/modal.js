const openModalBtn = document.querySelectorAll('[data-action="modal"]');
const closeBtn = document.querySelector('#close-modal');
const modalBody = document.querySelector('.modal__body');
const modal = document.querySelector('.modal');

openModalBtn.forEach(function (item) {
	item.addEventListener('click', function () {
		modal.classList.add('modal--open');
		document.body.classList.add('no-scroll');
	});
});

closeBtn.addEventListener('click', function () {
	modal.classList.remove('modal--open');
	document.body.classList.remove('no-scroll');
});

modal.addEventListener('click', function () {
	modal.classList.remove('modal--open');
	document.body.classList.remove('no-scroll');
});

modalBody.addEventListener('click', function (event) {
	event.stopPropagation();
});

document.addEventListener('keydown', function (event) {
	if (event.keyCode == 27) {
		modal.classList.remove('modal--open');
		document.body.classList.remove('no-scroll');
	}
});
