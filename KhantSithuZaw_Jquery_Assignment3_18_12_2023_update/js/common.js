$(document).ready(function () {
  $(".single-item").slick();
  $(".reverse").slick({
    rtl: true,
    autoplay: true,
    autoplaySpeed: 200,
    slidesToShow:2
  });
  $(".responsive").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.variable-width').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true
  });
  $(".data-slide").slick({
    autoplay: true,
    autoplaySpeed: 200
  });
  $('.center').slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 4,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  $('.lazy').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1
  });
  $('.fade').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear'
  });
  var slideIndex = 1;
  $('.add-remove').slick({
    slidesToShow: 3,
    slidesToScroll: 3
  });
  $('.js-add-slide').on('click', function () {
    slideIndex++;
    $('.add-remove').slick('slickAdd', "<div class='item'> <h3>" + slideIndex + '</h3></div > ');
  });
  $('.js-remove-slide').on('click', function () {
    $('.add-remove').slick('slickRemove', slideIndex - 1);
    if (slideIndex !== 0) {
      slideIndex--;
    }
  });
  var filtered = false;
  $('.filtering').slick({
    slidesToShow: 2,
    slidesToScroll: 1
  });


  $('.js-filter').on('click', function () {
    if (filtered === false) {
      $('.filtering').slick('slickFilter', ':odd');
      $(this).text('Unfilter Slides');
      filtered = true;
    } else {
      $('.filtering').slick('slickUnfilter');
      $(this).text('Filter Slides');
      filtered = false;
    }
  });


  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });

});
//$(function () {
//  $(".one > div").heightLine();
//
//  $(".two > div").heightLine({
//    maxWidth: 700,
//    minWidth: 500
//  });
//  $(".three > div").heightLine({
//    maxWidth: 700 //heightLine works when less than 700px screen size
//  });
//  $(".four > div").heightLine({
//    minWidth: 700//heightLine works when more than 700px screen size
//  });
//});
