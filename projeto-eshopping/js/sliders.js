$(document).ready(function () {
    $('#shelf .container,#deal-of-the-day .container').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:5000
    });
  });