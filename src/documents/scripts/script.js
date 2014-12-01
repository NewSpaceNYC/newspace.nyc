window.onscroll = function(){
	document.documentElement.scrollTop || document.body.scrollTop > 488 ?
		$('.header').addClass('opacity-1')
		: $('.header').removeClass('opacity-1');
}