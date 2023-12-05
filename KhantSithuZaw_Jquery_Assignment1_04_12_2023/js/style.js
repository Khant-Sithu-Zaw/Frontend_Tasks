$(document).ready(function () {
  $(".toggletxt").mouseenter(function () {
    alert("mouse just entered")
  });
  $(".toggletxt").mouseleave(function () {
    $(".toggletxt").css("background-color", "#2F2F2F");
  });
  $("#hide").click(function () {
    $(".toggletxt").hide(1000);
  });
  $("#show").click(function () {
    $(".toggletxt").show("fast");
  });
  $("#toggle").click(function () {
    $(".toggletxt").toggle();
  });
  $(".togglefade").hover(function () {
    $(this).removeClass("toggle");
  }, function () {
    $(this).addClass("toggle");
  });
  $(".btn1").dblclick(function () {
    $(".togglefade").fadeOut();
  });
  $(".btn2").dblclick(function () {
    $(".togglefade").fadeIn();
  });
  $(".btn3").dblclick(function () {
    $(".togglefade").fadeToggle();
  });
  $(".btn4").dblclick(function () {
    $(".togglefade").fadeTo("slow", 0.7);
  });
  $("input[type=text]").focus(function () {
    $(".flash").css("display", "inline").fadeOut(2000);
  });
  $("input[type=checkbox]").blur(function () {
    alert("This input field has lost its focus.");
  });
  $(".eventtxt").on({
    mouseover: function () {
      $("body").css("background-color", "lightgray");
    },
    mouseout: function () {
      $("body").css("background-color", "lightblue");
    },
    click: function () {
      $("body").css("background-color", "yellow");
    }
  });
  $(".flip").on({
    click: function () {
      $(".panel").slideDown("slow");
    },
    dblclick: function () {
      $(".panel").slideUp(3000);
    }
  });
  $(".slide").click(function () {
    $(".panel").slideToggle(5000);
  });
  $(".stopper").click(function () {
    $(".panel").stop();
  });
  $(".btntoggle").click(function () {
    $("button").toggleClass("btnchange");
  });
  $("#btn1").click(function () {
    alert("Text: " + $("#test").text());
  });
  $("#btn2").click(function () {
    alert("HTML: " + $("#test").html());
  });
  $(".getter").click(function () {
    alert("body content: " + $("body").text());
    alert("body content: " + $("body").html());
    alert("Checkbox's Value: " + $("input[type=checkbox]").val());
  });
  $(".btn5").click(function () {
    $(".w3s").attr("href", "https://www.w3schools.com/jquery/");
    $(".w3s").text("W3schools jquery");
  });
  $(".empty-btn").click(function () {
    $(".img-container").empty();
  });
  $(".remove-btn").click(function () {
    $(".img-container").remove();
  });
  $(".prepend").click(function () {
    $(".list-item").prepend("<li>Prepended item</li>");
  });
  $(".append").click(function () {
    $(".list-item").append("<li>Appended item</li>");
  });
  $(".lft-btn").click(function () {
    $(".box1").before("<div class='box'>before</div>");
  });
  $(".rht-btn").click(function () {
    $(".box1").after("<div class='box'>after</div>");
  });
  $(".animator").click(function () {
    $(".animate-obj").animate({
      left: '+=25px',
      opacity: '0.8',
      height: 'toggle',
      width: '+=50px'
    });
  });
});