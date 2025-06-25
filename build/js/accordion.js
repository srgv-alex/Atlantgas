const topics = document.querySelectorAll('.topic');

topics.forEach(function (topic) {
	topic.addEventListener('click', function (event) {
		if (event.target.closest('.topic__btn')) {
			topic.classList.toggle('topic--open');

			const use = topic.querySelector('.svg-accordion use');
			const content = topic.querySelector('.topic__content');

			if (topic.classList.contains('topic--open')) {
				use.setAttribute(
					'href',
					'./img/svgsprite/sprite.symbol.svg#tab-arrow-blue'
				);
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				use.setAttribute('href', './img/svgsprite/sprite.symbol.svg#tab-arrow');
				content.style.maxHeight = '0px';
			}
		}
	});
});
