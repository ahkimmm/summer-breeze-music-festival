$(function(){

	
	$(".right> li> .font0").click(function(){
		$(this).next().slideToggle();
		$( '.c p' ).toggleClass( 'ab' );
	});
	
		$(".right> li> .font1").click(function(){
		$(this).next().slideToggle();
		$( '.d p' ).toggleClass( 'ab' );
	});
	


});

$(function(){
	$(".right> li> ul").click(function(){
		$(this).children().children("img").toggleClass("turn");
	});
});

































































