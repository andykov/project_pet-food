$(document).ready(function() {

	var WIDTH = $(window).width();

	if (WIDTH > 1024) {
		$('.header-phone').removeAttr('href');
	}
//initialize swiper when document ready  
    var swiper = new Swiper('.full.swiper-container', {
      	pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        bulletClass: 'section-nav_item',
        paginationBulletRender: function (index, className) {
        	var slide = $('.' + this.wrapperClass).find('.swiper-slide')[index];
            return '<div class="section-nav_item"><div class="section-nav_img"><img src="' + '../img/' + $(slide).data('navimg') + '"/></div><span>' + $(slide).data('navtext') + '</span></div>';
        },
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheelControl: true,
        hashnav: true
    });






$('.btn-up').on('click', function(){
	var mySwiper = $('.full.swiper-container')[0].swiper;
	mySwiper.slideTo(0, 1000);
});


// $('.section-nav_item.slide-to-1').on('click', function(){
// 	mySwiper.slideTo(1, 1000);
// });
// $('.section-nav_item.slide-to-2').on('click', function(){
	
// });
// $('.section-nav_item.slide-to-3').on('click', function(){
	
// });
// $('.section-nav_item.slide-to-4').on('click', function(){
	
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

	// $(window).on('scroll', function(){
	// 	var mySwiper = $('.full.swiper-container')[0].swiper;
	// 	var slideActive = mySwiper.activeIndex;
	// 	if (slideActive == 1) {
	// 		console.log('sdfsdfsd');
	// 	}
	// });

	// $(window).scroll(function(){
	// 	if (hash == '#slide1') {
	// 		$('.section-nav_item.slide-to-1').addClass('active');
	// 	} else if (hash == '#slide2') {
	// 		$('.section-nav_item.slide-to-2').addClass('active');
	// 	} else if (hash == '#slide3') {
	// 		$('.section-nav_item.slide-to-3').addClass('active');
	// 	} else if (hash == '#slide4') {
	// 		$('.section-nav_item.slide-to-4').addClass('active');
	// 	};
	// });


// $('.section-nav_item').on('click', function() {
// 	var mySwiper = $('.full.swiper-container')[0].swiper;

// 	$(this).addClass('active').siblings().removeClass('active');



// 	if ($(this).is('.slide-to-1')) {
// 		mySwiper.slideTo(1, 1000);
// 	} else if ($(this).is('.slide-to-2')) {
// 		mySwiper.slideTo(2, 1000);
// 	} else if ($(this).is('.slide-to-3')) {
// 		mySwiper.slideTo(3, 1000);
// 	} else if ($(this).is('.slide-to-4')) {
// 		mySwiper.slideTo(4, 1000);
// 	};
// });



    // var swiper = new Swiper('.slider', {
    // 	pagination: 'section-nav',
    //     bulletClass: 'section-nav_item',
    //     paginationClickable: true,
    //     direction: 'horizontal',
    //     mousewheelControl: false,
    //     nextButton: 'swiper-button-next',
    //     prevButton: 'swiper-button-prev',
    // });



// Now you can use all slider methods like


    $("#reviews").animatedModal();

   //  $('#fullpage').fullpage({
			// 	verticalCentered: true,
			// 	sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
			// 	// autoScrolling: false,
			// 	afterRender: function(){


			// 		//playing the video
			// 		$('video').get(0).play();
			// 	}
			// });


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



    // $("#bgndVideo").YTPlayer();

    // var myPlayer;
    //     $(function() {
    //         myPlayer = $('.js-video').YTPlayer();
    //     });
});