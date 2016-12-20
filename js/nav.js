$(document).ready(function () {
        var objToStick = $("#fix"); //Получаем нужный объект
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





// Gallery

$(function () {
  "use strict";
  
 $(".galer img").on({
    click: function () {
var src = $(this).attr("src");
     $(".show img").attr("src", src)
 },
   mouseout: function () {
   $(".show img")
.attr("src", src)
  }  
  });
});






// BHOD

$("#modalBhod").click(function(){
    $("#modalmain").slideToggle("slow");
	
});
$("#closeModal").click(function(){
    $("#modalmain").slideUp("slow");
	
});

// add tovar

$("#addTovarsLink").click(function(){
    $(".addTovars").slideDown("slow");
	
});

$("#addTovarsLinkTwo").click(function(){
    $(".addTovarsTwo").slideDown("slow");
	
});

//rREGISRE

$("#modalRegBtn").click(function(){
    $("#modalReg").slideToggle("slow");
	
});
$("#closemodalReg").click(function(){
    $("#modalReg").slideUp("slow");
	
});

