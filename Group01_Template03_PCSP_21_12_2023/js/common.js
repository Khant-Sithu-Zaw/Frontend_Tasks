$(document).ready(function () {
  var height = 0;
  $(".menu").click(function () {
    $(this).toggleClass("open");
    $(".head .menu-stick").toggleClass("open");
    $(".head .nav-bar").toggleClass("open");
  });
  $(window).resize(function(){
    if ($(document).width() > 1200)
    $(".head .nav-bar").show();
  });
  $(document).scroll(function (evt) {
    height= $(".sec-mv").height() ;
    if ($(window).scrollTop() > height) {
      $(".head").addClass("scroll");
      $(".scroll-logo").attr("src", "img/common/ico_logo_blue.png");
     }
    else {
      $(".head").removeClass("scroll");
      $(".scroll-logo").attr("src","img/common/ico_logo_white.png");
  }
});
});