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


// テスト
// $(function () {
//   $(".single-item").slick();
// });

// $(function () {
//   $('.single-item').slick({
//     autoplay: true,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//   });
// });

$(function () {
  $('.single-item').slick({
    autoplay: true,
    slidesToShow: 3,
    autoplaySpeed: 0,
    cssEase: 'linear',
    speed: 5000,
  });
});