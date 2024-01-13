$(document).ready(function () {
    $(".menu").click(function () {
      $(this).toggleClass("open");
      $("header .menu-stick").toggleClass("open");
      $("header nav").slideToggle(200);
    });
    $(window).resize(function(){
      if ($(document).width() > 1200)
      $("header nav").show();
    });
});