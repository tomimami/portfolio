
// ふわっと現れるアニメーション

jQuery(function () {
  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'right': '0px' //右から0pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'right': '-50px' //右から-50pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});




// スリック使ったスライド

$(function () {
  $('.single-item').slick({
    autoplay: true,
    slidesToShow: 3,
    autoplaySpeed: 0,
    cssEase: 'linear',
    speed: 5000,
  });
});





// ふわっと表示させる

  window.onload = function() {
    scroll_effect();
  
    $(window).scroll(function(){
     scroll_effect();
    });
  
    function scroll_effect(){
     $('.effect-fade').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
       $(this).addClass('effect-scroll');
      }
     });
    }
  };



  $(function(){
    $(".inview_re").on("inview", function (event, isInView) {
      if (isInView) {
        $(this).stop().addClass("is-show");
      } else {
        $(this).stop().removeClass("is-show");
      }
    });
  });


// フロート左スペースから出てくる
  $(function(){
    $(window).scroll(function () {
      if($(window).scrollTop() > 1600) {
        $('#move1').animate({'left':'50px'});
      }
    });
  });


  // フロート右スペースから出てくる
  $(function(){
    $(window).scroll(function () {
      if($(window).scrollTop() > 1800) {
        $('#move2').animate({'right':'50px'});
      }
    });
  });