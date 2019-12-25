$(window).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 210) {
    $("#nav").css("background-color", "#469DD6");
  } else {
    $("#nav").css("background-color", "transparent");
  }
});