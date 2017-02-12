var iconArray = document.getElementsByClassName("side-icon");

$("#side-image_01").click(function() {
  $(".change-img").attr("src", "images/bike_details.jpg");
  $(".plus-sign").css("display", "flex");
  changeImgOpacity(0);
});

$("#side-image_02").click(function() {
    $(".change-img").attr("src", "images/tail_tire.jpg");
    $(".plus-sign").css("display", "none");
    changeImgOpacity(1);
});

$("#side-image_03").click(function() {
    $(".change-img").attr("src", "images/main_gear.jpg");
    $(".plus-sign").css("display", "none");
    changeImgOpacity(2);
});

function changeImgOpacity(index) {
  for (var i = 0; i < iconArray.length; i++) {
    iconArray[i].className = "side-icon";
    if (i == index) {
      iconArray[i].className += " active-shadow";
    }
  }
}
