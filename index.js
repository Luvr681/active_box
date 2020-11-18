$(function() {

	// Nav Toggle================================
  let nav = $('#nav');
  let navToggle = $('#navToggle');

  navToggle.on('click', function(event) {
  	event.preventDefault();

  	nav.toggleClass('show')//Если есть класс, то он убирается, а если нет, то добавляется
  })

	// Fixed Header================================
  let header = $('#header');
  let intro = $('#intro');
  let introHeight;//Высота элемента, включая padding
  let scrollPosition = $(window).scrollTop();//Сколько мы проскролили страницу в px

  $(window).on('scroll load resize', () => {

    introHeight = intro.innerHeight();//Высота элемента, включая padding
    scrollPosition = $(this).scrollTop();
    scrollPosition > introHeight ? header.addClass('fixed') : header.removeClass('fixed');

  }) 

  // Smooth scroll================================
  $("[data-scroll]").on('click', function(event) {
  	event.preventDefault();// Отмена стандартного поведения при клике

  	let elementId = $(this).data('scroll')//Получение элемента с атрибутом data-scroll == нужному
  	let elementOffset = $(elementId).offset().top; //Получение отступа данного элемента от верха

  	$('html, body').animate({
  		scrollTop: elementOffset - 70
  	});
  	nav.removeClass('show')

  });
  let logotype = $('#logo');
  logotype.on('click', () => {
  	$('html, body').animate({
  		scrollTop: 0
  	})
  	nav.removeClass('show')
  })

  //Reviews
  let slider;
  $('#reviewsSlider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true,
	  arrows: false
	});

});
