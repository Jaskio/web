/* upload mask */
$("#file-btn").click(function () {
    $("#file").trigger("click");
});

/* display image in editor */
var imgPath = $("#display-image").attr("value");  
$("#display-image").css({"background-image": "url("+imgPath+")"});

/* select file */
$("#file").change(function() { 
    $("#upload-report").css({"display": "block"});
});