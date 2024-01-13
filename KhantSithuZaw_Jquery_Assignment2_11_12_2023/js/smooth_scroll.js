$(document).ready(function () {
  $('.smooth').on('click', function(e){
    var href = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $( href ).offset().top
    },1000);
    e.preventDefault();
  });
});