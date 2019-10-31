$(function() {


//---------------------------tabs-----------------------
  $('.tabs__wrap').hide();
  $('.tabs__wrap:first').show();
  $('.tabs ul a:first').addClass('active');
   $('.tabs ul a').click(function(event){
    event.preventDefault();
    $('.tabs ul a').removeClass('active');
    $(this).addClass('active');
    $('.tabs__wrap').hide();
     var selectTab = $(this).attr('href');
    $(selectTab).fadeIn();
  });


//------------------------------slider-----------------------------
  var swiper = new Swiper('.header__slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.header__next',
      prevEl: '.header__prev',
    },
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
  });

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});

//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>50){
          $('.header').addClass('header--active');
      }
      else if ($(this).scrollTop()<50){
          $('.header').removeClass('header--active');
      }
  });


  if ($(this).scrollTop()<50){
      $('.header').removeClass('header--active');
  }
  
});
