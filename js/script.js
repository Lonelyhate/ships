$(document).ready(function(){

	$(window).scroll(function(){
	    if ($(window).scrollTop() > 40) {
	        $('.header').addClass('scroll');
	    }
	    else {
	        $('.header').removeClass('scroll')
	    }
	});

	$('.slider').slick({
		dots:true,
	});

	$('.slider-two').slick({
		infinite:false,
	});

	$('.content-block-six-title').click(function(event){
		if($('.content-block-six').hasClass('block-one')){
			$('.content-block-six-title').not($(this)).removeClass('active');
			$('.content-block-six-text').not($(this).next()).slideUp(200);
		}
		$(this).toggleClass('active').next().slideToggle(200);
	});

	$('.header-burger').click(function(event) {
		$('.header-burger,.header-menu').toggleClass('menu-active');
		$('body').toggleClass('lock');
	});

	$('.tabs-platform-item-title').click(function(event){
		$(this).toggleClass('tabs-active').next().slideToggle(200);
	});

	$('.two-content-item').click(function(event){
		if($('.tabs-platform-item-two-content-body').hasClass('content-item-class')){
			$('.two-content-item').not($(this)).removeClass('content-item-backgr');
		}
		$(this).toggleClass('content-item-backgr');
	});

	$('.item-one-content-row-item').click(function(event){
		if($('.item-one-content-rows').hasClass('content-rows-class')){
			$('.item-one-content-row-item').not($(this)).removeClass('content-row-backgr');
		}
		$(this).toggleClass('content-row-backgr');
	});


	let slider = $("#reviewsSlider");

	slider.slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		variableWidth: true,
	  });
	  slider.on('wheel', (function(e) {
		e.preventDefault();
		if (e.originalEvent.deltaY < 0) {
		  $(this).slick('slickNext');
		} else {
		  $(this).slick('slickPrev');
		}
	  }));

	  


	  let slidertwo = $("#reviewsSlidertwo");

	slidertwo.slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		variableWidth: true
		
	  });
	  slidertwo.on('wheel', (function(e) {
		e.preventDefault();
		if (e.originalEvent.deltaY < 0) {
		  $(this).slick('slickNext');
		} else {
		  $(this).slick('slickPrev');
		}
	  }));

	  let sliderthree = $("#reviewsSliderthree");

	sliderthree.slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		variableWidth: true
	  });
	  sliderthree.on('wheel', (function(e) {
		e.preventDefault();
		if (e.originalEvent.deltaY < 0) {
		  $(this).slick('slickNext');
		} else {
		  $(this).slick('slickPrev');
		}
	  }));

	  
	  

});
