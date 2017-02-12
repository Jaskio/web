$(window).resize(function() {
  if (window.innerWidth < 768) {
    showHamburger();
    if ($(".menu-open").css("right") == "-320px") {
      $(".menu-open").css("display", "none");
    }
  } else {
      hideHamburger();
    }
});

$(".toggle-box").click(function() {
  $(".menu-open").css("display", "block");
  if ($(".menu-open").css("right") == "-320px") {
    $(".menu-open").css("right", "0");
  } else {
    $(".menu-open").css("right", "-320px");
    $(".menu-open").css("display", "none");
  }
});

function showHamburger() {
  $(".toggle-box").css("display", "block");
  $(".navbar__navbar-list").css("display", "none");
  $(".menu-open").css("display", "block");
}

function hideHamburger() {
  $(".toggle-box").css("display", "none");
  $(".navbar__navbar-list").css("display", "flex");
  $(".menu-open").css("display", "none");
}
