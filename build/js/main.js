$(document).ready(function() {

	var WIDTH = $(window).width();
	var video = $('.bg-video-s2')[0];

	// remove clickable phone in desktop
	if (WIDTH > 1024) {
		$('.header-phone').removeAttr('href');
	}

	// init modal
	$("#reviews").animatedModal();


	// section slide
	var swiperSection = new Swiper('.full.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		direction: 'vertical',
		wrapperClass: 'full-wrap',
		bulletClass: 'section-nav_item',
		paginationBulletRender: function (index, className) {
			var swiperSection = $('.' + this.wrapperClass).find('.swiper-slide')[index];
			return '<div class="section-nav_item animated"><div class="section-nav_img"><img src="' + '../img/' + $(swiperSection).data('navimg') + '"/></div><span>' + $(swiperSection).data('navtext') + '</span></div>';
		},
		slidesPerView: 1,
		mousewheelControl: true,
		hashnav: true,
		onSlidePrevEnd: function (swiper) {
			// $('.bg-video').each(function(i){
			// 	var video = $(this)[0];
			// });
			// video[video.paused ? 'play' : 'load']();
		},
		onSlideChangeStart: function (swiper) {

		},
		onSlideChangeEnd: function (swiper) {

		},
		onTransitionStart: function (swiper) {

		},
		 onSetTranslate: function (swiper, translate) {

		},
		onSetTransition: function (swiper, transition) {

		 },
	});

	// section slide in modal
	var swiperSlider = new Swiper('.slider.swiper-container', {
		pagination: '.slider-nav',
		bulletClass: 'slider-nav_item',
		wrapperClass: 'slider-wrap',
		paginationClickable: true,
		direction: 'horizontal',
		mousewheelControl: true,
		nextButton: 'swiper-button-next',
		prevButton: 'swiper-button-prev',
		paginationBulletRender: function (index, className) {
			var swiperSlider = $('.' + this.wrapperClass).find('.swiper-slide')[index];
			return '<div class="slider-nav_item"><img src="' + $(swiperSlider).data('navimgrev') + '"/></div>';
		},
	});
	$('.swiper-button-next').on('click', function(){
		swiperSlider.slideNext(1000)
	});
	$('.swiper-button-prev').on('click', function(){
		swiperSlider.slidePrev(1000)
	});


	// page up scroll
	$('.btn-up').on('click', function(){
		var mySwiper = $('.full.swiper-container')[0].swiper;
		mySwiper.slideTo(0, 1000);
	});

	// replace video path
	$('.header-nav_item').on('click', function(e) {
		$(this).addClass('active').siblings().removeClass('active');
		var video = $('.bg-video').first(),
			videoPath = $(this).data('src'),
			source = $('.bg-video source').attr('src');


		if ($(this).attr('href') == '#dog') {
			source = source.replace(/all/, 'dogs');
			source = source.replace(/cats/, 'dogs');
			$('.bg-video').attr('src', source)
			$('.bg-video source').attr('src', source)
		} else if ($(this).attr('href') == '#cats') {
			source = source.replace(/all/, 'cats');
			source = source.replace(/dogs/, 'cats');
			$('.bg-video').attr('src', source)
			$('.bg-video source').attr('src', source)
		} else if ($(this).attr('href') == '#all') {
			source = source.replace(/cats/, 'all');
			source = source.replace(/dogs/, 'all');
			$('.bg-video').attr('src', source)
			$('.bg-video source').attr('src', source)
		}
	});


});