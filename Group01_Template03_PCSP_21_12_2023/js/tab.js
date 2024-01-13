$(document).ready(function () {
  $('.tabs-nav li:first-child a').addClass('active');
  $('.content').hide();
  $('.content:first').show();

  // Click function
  $('.tabs-nav li a').click(function () {
    $('.tabs-nav li a').removeClass('active');
    $(this).addClass('active');
    $('.content').hide();

    var activeTab = $(this).attr('href');
    $(activeTab).fadeIn();
    return false;
  });
  $(".tabs-thumb:first-child").addClass("is-active").closest(".tabs").find(".tabs-panel:first-child").show();

  $(".tabs-thumb").click(function () {
    // Cancel the siblings
    $(this).siblings(".tabs-thumb").removeClass("is-active").closest(".tabs").find(".tabs-panel").hide();
    // Active the thumb & panel
    $(this).addClass("is-active").closest(".tabs").find(".tabs-panel").eq($(this).index(".tabs-thumb")).show();
  });
});
