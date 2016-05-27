$(document).ready(function() {
//initialize swiper when document ready  
    var swiper = new Swiper('.swiper-container', {
      	// pagination: '.section-nav',
      	// paginationClickable: true,
      	// paginationType: 'custom',
      	// paginationElement: '.section-nav_item',
		// paginationBulletRender: function (index, className) {
		// 	var slide_nav_i = $('.section-nav').find('.section-nav_item').index();
		// 	console.log(slide_nav_i);
		// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
		// },
		// paginationBulletRender: function (index, className) {
		// 	var slide = $('.' + this.wrapperClass).find('.swiper-slide')[index];
		// 	return '<span class="' + className + ' ' + $(slide).attr('data-class') + '">' + (index + 1) + '</span>';
		// },
		paginationCustomRender: function (swiper, current, total) {
			$('.section-nav_item').on('click', function(){
				alert();
			});
			return current + ' of ' + total;
		},
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true,
        hashnav: true
    })

   //  $('#fullpage').fullpage({
			// 	verticalCentered: true,
			// 	sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
			// 	// autoScrolling: false,
			// 	afterRender: function(){


			// 		//playing the video
			// 		$('video').get(0).play();
			// 	}
			// });

$('.header-nav_item').on('click', function() {
	// $(this).addClass('active');
	$(this).addClass('active').siblings().removeClass('active');
	var myVideo = document.getElementById("myVideo");

	if ($(this).attr('href') == '#dog') {
		//myVideo.pause(); //не обязательно
		//myVideo.poster =  "/img/examples/example2-500x375.jpg";
		myVideo.src = "../video/video-dog-section-3.mp4";
		// myVideo.load();
		myVideo.play();// если необходимо

	} else if ($(this).attr('href') == '#cats') {
		//myVideo.pause(); //не обязательно
		//myVideo.poster =  "/img/examples/example2-500x375.jpg";
		myVideo.src = "../video/video-cats-section-1.mp4";
		// myVideo.load();
		myVideo.play();// если необходимо

	} else if ($(this).attr('href') == '#all') {
		//myVideo.pause(); //не обязательно
		//myVideo.poster =  "/img/examples/example2-500x375.jpg";
		myVideo.src = "../video/video-all-section-1.mp4";
		// myVideo.load();
		myVideo.play();// если необходимо
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