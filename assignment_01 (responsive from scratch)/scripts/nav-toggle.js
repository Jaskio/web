/* Check browser width and auto close toggle bar */
$(window).resize(function() {
    if (window.innerWidth > 768) {
        $(".menu-open").css("display", "none");
    } 
});

/* Change css property and toggle navbar */
$(".toggle-box").click(function() {
    if ($(".menu-open").css("display") == "none" ) {
        $(".menu-open").slideToggle("fast", function() {
            $(".menu-open").css("display", "block");
        });
    } else {
        $(".menu-open").slideToggle("fast", function() {
            $(".menu-open").css("display", "none");
        }); 
    }
});