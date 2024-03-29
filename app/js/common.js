(function(f){jQuery.fn.extend({slimScroll:function(h){var a=f.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:0.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:0.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},h);this.each(function(){function r(d){if(s){d=d||
window.event;var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);f(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&m(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}}function m(d,f,h){k=!1;var e=d,g=b.outerHeight()-c.outerHeight();f&&(e=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),e=Math.min(Math.max(e,0),g),e=0<d?Math.ceil(e):Math.floor(e),c.css({top:e+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());
e=l*(b[0].scrollHeight-b.outerHeight());h&&(e=d,d=e/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),g),c.css({top:d+"px"}));b.scrollTop(e);b.trigger("slimscrolling",~~e);v();p()}function C(){window.addEventListener?(this.addEventListener("DOMMouseScroll",r,!1),this.addEventListener("mousewheel",r,!1),this.addEventListener("MozMousePixelScroll",r,!1)):document.attachEvent("onmousewheel",r)}function w(){u=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),D);c.css({height:u+"px"});
var a=u==b.outerHeight()?"none":"block";c.css({display:a})}function v(){w();clearTimeout(A);l==~~l?(k=a.allowPageScroll,B!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;B=l;u>=b.outerHeight()?k=!0:(c.stop(!0,!0).fadeIn("fast"),a.railVisible&&g.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(A=setTimeout(function(){a.disableFadeOut&&s||(x||y)||(c.fadeOut("slow"),g.fadeOut("slow"))},1E3))}var s,x,y,A,z,u,l,B,D=30,k=!1,b=f(this);if(b.parent().hasClass(a.wrapperClass)){var n=b.scrollTop(),
c=b.parent().find("."+a.barClass),g=b.parent().find("."+a.railClass);w();if(f.isPlainObject(h)){if("height"in h&&"auto"==h.height){b.parent().css("height","auto");b.css("height","auto");var q=b.parent().parent().height();b.parent().css("height",q);b.css("height",q)}if("scrollTo"in h)n=parseInt(a.scrollTo);else if("scrollBy"in h)n+=parseInt(a.scrollBy);else if("destroy"in h){c.remove();g.remove();b.unwrap();return}m(n,!1,!0)}}else{a.height="auto"==a.height?b.parent().height():a.height;n=f("<div></div>").addClass(a.wrapperClass).css({position:"relative",
overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",width:a.width,height:a.height});var g=f("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=f("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?
"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,WebkitBorderRadius:a.borderRadius,zIndex:99}),q="right"==a.position?{right:a.distance}:{left:a.distance};g.css(q);c.css(q);b.wrap(n);b.parent().append(c);b.parent().append(g);a.railDraggable&&c.bind("mousedown",function(a){var b=f(document);y=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);m(0,c.position().top,!1)});
b.bind("mouseup.slimscroll",function(a){y=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",function(a){a.stopPropagation();a.preventDefault();return!1});g.hover(function(){v()},function(){p()});c.hover(function(){x=!0},function(){x=!1});b.hover(function(){s=!0;v();p()},function(){s=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(z=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&
(m((z-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),z=b.originalEvent.touches[0].pageY)});w();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),m(0,!0)):"top"!==a.start&&(m(f(a.start).position().top,null,!0),a.alwaysVisible||c.hide());C()}});return this}});jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})})(jQuery);



$(document).ready(function() {
    $('.content__nav_search--list').slimScroll({
        height: '350px'
    });
});

$(document).ready(function() {
    $('.catalog__main_brend--filter div').slimScroll({
        height: '235px'
    });
});

$(function() {

//---------------------------catalog slider-----------------------
  var swiper = new Swiper('.catalog__slider', {
    slidesPerView: 3,
    spaceBetween: 25,
    navigation: {
      nextEl: '.catalog__slider_next',
      prevEl: '.catalog__slider_prev',
    },
    breakpoints: {
      578: {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
      }
    }
  });

//---------------------------other slider-----------------------
  var swiper = new Swiper('.other__list', {
    slidesPerView: 6,
    spaceBetween: 30,
    breakpoints: {
      992: {
        slidesPerView: 4.5,
        spaceBetween: 10
      },
      567: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10
      }
    }
  });

//------------------------------header slider-----------------------------
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

//------------------------------header slider-----------------------------
  var swiper = new Swiper('.tovar__slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.tovar__next',
      prevEl: '.tovar__prev',
    }
  });

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

   
  $('.content__img_tovar').hide();
  $('.content__img_tovar:first').show();
  $('.content__tabs a:first').addClass('active');
   $('.content__tabs a').click(function(event){
    event.preventDefault();
    $('.content__tabs a').removeClass('active');
    $(this).addClass('active');
    $('.content__img_tovar').hide();
     var selectTab = $(this).attr('href');
    $(selectTab).fadeIn();
  });


//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>50){
          $('.header').addClass('header--active');
          $('.up').addClass('up--active');
      }
      else if ($(this).scrollTop()<50){
          $('.header').removeClass('header--active');
          $('.up').removeClass('up--active');
      }
  });

  if($(this).scrollTop()>50){
      $('.header').addClass('header--active');
  }


//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});

  $('input[type="tel"]').mask('+0 (000) 000-00-00');

  $('input[type="code"]').mask('000 000');

//-----------------------------mobile-hamburger-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('.header--mob__nav').toggleClass('header--mob__nav--active');
    $('body').toggleClass('no-scroll');
    $('.header--mob__search').toggleClass('header--mob__search--menu');
  });

//-----------------------------mobile-search-----------------------------
  $('.header--mob__search').hover(function() {
    $('.header--mob__search_form').toggleClass('header--mob__search_form--active');
  });

//-----------------------------mobile-footer--mob-acardeon---------------------------
  $(".footer--mob__col ul").slideUp("slow");
  $(".active ul").slideDown("slow");

  $(".footer--mob__col h3").on("click", function(){
    if ($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
      $(".footer--mob__col ul").slideUp("slow");
    }
    else {
      $(".active ul").slideUp("slow");
      $(".active").removeClass('active');
      $(this).parent().addClass('active');
      $(".active ul").slideDown("slow");
    }
  });

//-----------------------------mobile-header-acardeon---------------------------
  $(".header--mob__nav_wrap ul").slideUp("slow");
  $(".active ul").slideDown("slow");

  $(".header--mob__nav_wrap p").on("click", function(){
    if ($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
      $(".header--mob__nav_wrap ul").slideUp("slow");
    }
    else {
      $(".active ul").slideUp("slow");
      $(".active").removeClass('active');
      $(this).parent().addClass('active');
      $(".active ul").slideDown("slow");
    }
  });

//-----------------------------mobile-info---------------------------
  $(".info--mob__description").slideUp("slow");
  $(".active .info--mob__description").slideDown("slow");

  $(".info--mob__title").on("click", function(){
    if ($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
      $(".info--mob__description").slideUp("slow");
    }
    else {
      $(".active .info--mob__description").slideUp("slow");
      $(".active").removeClass('active');
      $(this).parent().addClass('active');
      $(".active .info--mob__description").slideDown("slow");
    }
  });
//-------------------------скорость якоря---------------------------------------
  $(".up").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 90}, 'slow', 'swing');
  });

});

