$(document).ready(function() {

    // $('#fullpage').fullpage();

    $('#fullpage').fullpage({
				verticalCentered: true,
				sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
				// autoScrolling: false,
				afterRender: function(){


					//playing the video
					$('video').get(0).play();
				}
			});

$('.header-nav_item').on('click', function() {
	if ($(this).attr('href') == '#dog') {

		//получим медиа объект в переменную
		var myVideo = document.getElementById("myVideo");
		//myVideo.pause(); //не обязательно
		//установим новый постер для видео
		// myVideo.poster =  "/img/examples/example2-500x375.jpg";
		//установим новый видео файл
		myVideo.src = "../video/video-dog-section-1.mp4";
		//выполним перезагрузку медиа элемента на странице
		//не обязательно, т.к. смена src вызывает и перезагрузку
		myVideo.load();
		//можно запустить видео на воспроизведение
		myVideo.play();// если необходимо

	} else if ($(this).attr('href') == '#cats') {

		//получим медиа объект в переменную
		var myVideo = document.getElementById("myVideo");
		//myVideo.pause(); //не обязательно
		//установим новый постер для видео
		// myVideo.poster =  "/img/examples/example2-500x375.jpg";
		//установим новый видео файл
		myVideo.src = "../video/video-cats-section-1.mp4";
		//выполним перезагрузку медиа элемента на странице
		//не обязательно, т.к. смена src вызывает и перезагрузку
		myVideo.load();
		//можно запустить видео на воспроизведение
		myVideo.play();// если необходимо

	} else if ($(this).attr('href') == '#all') {

		//получим медиа объект в переменную
		var myVideo = document.getElementById("myVideo");
		//myVideo.pause(); //не обязательно
		//установим новый постер для видео
		// myVideo.poster =  "/img/examples/example2-500x375.jpg";
		//установим новый видео файл
		myVideo.src = "../video/video-all-section-1.mp4";
		//выполним перезагрузку медиа элемента на странице
		//не обязательно, т.к. смена src вызывает и перезагрузку
		myVideo.load();
		//можно запустить видео на воспроизведение
		myVideo.play();// если необходимо

	}
});








// Выбираем видео элемент
var vid = document.getElementById('myVideo2');
//var vid = $('#v0')[0]; // jquery опция

// остановка видео при загрузке
vid.pause();

// Пошаговое воспроизведение видео при прокрутке страницы
window.onscroll = function(){
	vid.pause();
};

// Обновления видеокадров для плавного воспроизведения при прокрутке
setInterval(function(){
	vid.currentTime = window.pageYOffset/400;
}, 100);



    // $("#bgndVideo").YTPlayer();

    // var myPlayer;
    //     $(function() {
    //         myPlayer = $('.js-video').YTPlayer();
    //     });
});