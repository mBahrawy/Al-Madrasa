/*=== Window resize responsive mobile menu ===*/
$(window).resize(function () {
  if ($(window).innerWidth() <= 768) {
  } else {
    $("body").removeClass("mobile-view");
    $('#main-menu').removeClass("mobile-menu-active");
  }
});

$("#mobile-menu-trigger").click(function () {
  $("body").toggleClass("mobile-view");
  $('#main-menu').toggleClass("mobile-menu-active");
  $(this).toggleClass("changeCollabesIcon");
});

$('a#close-popup').click(function () {
  $(".popup").fadeOut("slow", function () {
  });
})

$("#main-menu > ul > li > a > i").click(function () {
  $(this).parent().next("ul").toggleClass("slideDownSubMenu");
});

/*=== Popup video ===*/
$('img#open-video').click(function () {
  $(".popup").fadeIn("slow", function () {
  });
})

