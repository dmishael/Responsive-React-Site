$(document).ready(() => {
  $('#slideshow .slick').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  });
});

$(document).ready(() => {
  $('#slideshowTwo .slickTwo').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  });
});

$(document).ready(() => {
  $('#carousel').carousel({
    full_width: true,
    numVisible: 3,
    padding: 200,
    shift: 5,
    no_wrap: true,
  });
  autoplay();

  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
  }
});
