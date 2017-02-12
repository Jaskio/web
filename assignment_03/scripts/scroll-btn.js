var headerHeight = window.innerHeight;

$(".scroll-down-btn").click(function() {
  $("html, body").animate({
    scrollTop: headerHeight
  });
});

$("#bikes_anchor").click(function() {
  $("html, body").animate({
    scrollTop: headerHeight * 2 - 10
  });
});

$("#components_anchor").click(function() {
  $("html, body").animate({
    scrollTop: headerHeight * 3 - 150
  });
});

$("#accessories_anchor").click(function() {
  $("html, body").animate({
    scrollTop: headerHeight * 4 - 260
  });
});

 new WOW().init();
