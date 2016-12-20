$(document).ready(function () {
        var objToStick = $("#fd"); //Получаем нужный объект
        var topOfObjToStick = $(objToStick).offset().top; //Получаем начальное расположение нашего блока

        $(window).scroll(function () {
            var windowScroll = $(window).scrollTop(); //Получаем величину, показывающую на сколько прокручено окно

            if (windowScroll > topOfObjToStick) { // Если прокрутили больше, чем расстояние до блока, то приклеиваем его
                $(objToStick).addClass("topWindow");
            } else {
                $(objToStick).removeClass("topWindow");
            };
        });
    });


$().ready(function(){
  $('.tab-title>a').click(function(e){
    e.preventDefault();
    var index = $(this).parent().index();
    $(this).parent().addClass('active')
         .siblings().removeClass('active')
         .parent('ul.tabs').siblings('.tabs-content').children('.content').removeClass('active')
         .eq(index).addClass('active');
  });
})






 // адаптивное меню
$(document).ready(function() {
  $('#adapmenu').click(function() {
    $('.navbar').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 500 ) {			
			$('.navbar').removeAttr('style');
		 }
	});//end resize
});//end ready



// aniamte secondtext
$(document).ready(function () {
        var objToStick = $(".secondtext"); //Получаем нужный объект
        var topOfObjToStick = $(objToStick).offset().top; //Получаем начальное расположение нашего блока

        $(window).scroll(function () {
            var windowScroll = $(window).scrollTop(); //Получаем величину, показывающую на сколько прокручено окно

            if (windowScroll > topOfObjToStick) { // Если прокрутили больше, чем расстояние до блока, то приклеиваем его
                $(objToStick).fadeIn(3000);
           
            };
        });
    });


// secondtext IMG

$(document).ready(function () {
        var objImg = $("#iphoneImg"); //Получаем нужный объект
        var topOfobjImg = $(objImg).offset().top; //Получаем начальное расположение нашего блока

        $(window).scroll(function () {
            var imgScroll = $(window).scrollTop(); //Получаем величину, показывающую на сколько прокручено окно

            if (imgScroll > topOfobjImg) { // Если прокрутили больше, чем расстояние до блока, то приклеиваем его
                $(objImg).slideDown(2000);
           
            };
        });
    });

