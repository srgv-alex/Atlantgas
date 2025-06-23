const swiper = new Swiper('.swiper', {
	// effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	// slidesPerView: 'auto', // чтобы задать ширину в CSS
	// spaceBetween: 40,
	// coverflowEffect: {
	// 	rotate: 0,
	// 	stretch: 0,
	// 	depth: 150,
	// 	modifier: 2,
	// 	slideShadows: false,
	// },
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
