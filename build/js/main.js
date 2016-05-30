$(document).ready(function() {

	var WIDTH = $(window).width();

	if (WIDTH > 1024) {
		$('.header-phone').removeAttr('href');
	}
//initialize swiper when document ready  
    var swiperSection = new Swiper('.full.swiper-container', {
      	pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        wrapperClass: 'full-wrap',
        bulletClass: 'section-nav_item',
        paginationBulletRender: function (index, className) {
        	var swiperSection = $('.' + this.wrapperClass).find('.swiper-slide')[index];
            return '<div class="section-nav_item"><div class="section-nav_img"><img src="' + '../img/' + $(swiperSection).data('navimg') + '"/></div><span>' + $(swiperSection).data('navtext') + '</span></div>';
        },
        slidesPerView: 1,
        // spaceBetween: 30,
        mousewheelControl: true,
        hashnav: true
    });


$('.btn-up').on('click', function(){
	var mySwiper = $('.full.swiper-container')[0].swiper;
	mySwiper.slideTo(0, 1000);
});

 $("#reviews").animatedModal();

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
// $('.section-nav_item.slide-to-1').on('click', function(){
// 	mySwiper.slideTo(1, 1000);
// });



	// var mySwiper = $('.full.swiper-container')[0].swiper;
	// var hash = window.location.hash;
	

	// if (hash == '#slide1') {
	// 	mySwiper.slideTo(1, 1000);
	// } else if (hash == '#slide2') {
	// 	mySwiper.slideTo(2, 1000);
	// } else if (hash == '#slide3') {
	// 	mySwiper.slideTo(3, 1000);
	// } else if (hash == '#slide4') {
	// 	mySwiper.slideTo(4, 1000);
	// };

// $('.section-nav_item').on('click', function() {
// 	var mySwiper = $('.full.swiper-container')[0].swiper;

// 	$(this).addClass('active').siblings().removeClass('active');



// Now you can use all slider methods like


$('.header-nav_item').on('click', function(e) {
	// e.preventDefault;
	$(this).addClass('active').siblings().removeClass('active');
	var myVideo = document.getElementsByClassName("bg-video");
	var myVideoTag = document.getElementsByTagName("source");

	var videoPath = $(this).data('src');
	var val = $('.bg-video source').attr('src');


	if ($(this).attr('href') == '#dog') {
		val = val.replace(/all/, 'dogs');
		val = val.replace(/cats/, 'dogs');
		$('.bg-video').attr('src', val)
		$('.bg-video source').attr('src', val)
		// myVideo.src = val;
		// myVideo.play;
	} else if ($(this).attr('href') == '#cats') {
		val = val.replace(/all/, 'cats');
		val = val.replace(/dogs/, 'cats');
		$('.bg-video').attr('src', val)
		$('.bg-video source').attr('src', val)
		// myVideo.src = val;
		// myVideo.play();
	} else if ($(this).attr('href') == '#all') {
		val = val.replace(/cats/, 'all');
		val = val.replace(/dogs/, 'all');
		$('.bg-video').attr('src', val)
		$('.bg-video source').attr('src', val)
		// myVideo.src = val;
		// myVideo.play();
	}
});




// // Выбираем видео элемент
// var vid = document.getElementById('myVideo2');
// //var vid = $('#v0')[0]; // jquery опция

// // остановка видео при загрузке
// vid.pause();

// // Пошаговое воспроизведение видео при прокрутке страницы
// window.onscroll = function(){
// 	vid.pause();
// };

// // Обновления видеокадров для плавного воспроизведения при прокрутке
// setInterval(function(){
// 	vid.currentTime = window.pageYOffset/400;
// }, 100);


});