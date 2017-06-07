$(function() {


$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");


$(".toggle_mnu").click(function() {
	$(".sandwich").toggleClass("active");
});

var windowWidth = $(window).width();

$(".top_mnu ul a").click(function() {
	$(".sandwich").toggleClass("active");
	if(windowWidth < 996){
		$(".top_mnu").toggleClass("active__top_mnu");
	}
});

$('.toggle_mnu').click(function(){
	if ($(".top_mnu").hasClass('active__top_mnu')) {
		$(".top_mnu").removeClass("active__top_mnu");
	} else {
		$(".top_mnu").addClass("active__top_mnu");
	};
});

$( function() {
    $( "#slider-range-max" ).slider({
      range: "max",
      min: 1,
      max: 4,
      value: 3,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
      }
    });
});

});
