/*********************     slick slider      ***********************/
$(document).ready(function () {
  $('.header-slider').slick({
    dots: true,
    autoplay: true,
    arrows: false
  });
});

/*********************     плавный скролл        ************************/
$(document).ready(function () {
  $('a[href^="#"]').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    if ($.browser) {
      $('body').animate({
        scrollTop: destination
      }, 1000);
    } else {
      $('html').animate({
        scrollTop: destination
      }, 1000);
    }
    return false;
  });
});