
$( window ).on( "load", function() {
    $(".recipesList__overlap").addClass("recipesList__overlap--slide");
    $(".recipeContent").addClass("recipeContent--active");
});


/* Element click */
$(".recipesList__item").click(function() {
    $(".recipesList__item").removeClass("recipesList__item--reset");
    $(".recipesList__image").removeClass("recipesList__image--reset");
    
    setTimeout(function() {
        $(".recipesList__item").addClass("recipesList__image--active");
    }, 400);

    $(".recipeSingle").addClass("recipeSingle--active");
    $(".sidetrack").addClass("sidetrack--active");
    $(".ingredientsTitle").addClass("ingredientsTitle--active");
    $(".info").addClass("info--active");
    $(".ingredient").addClass("ingredient--active");
    $(".line").addClass("line--active");
    $(".recipeContent").removeClass("recipeContent--active");
})


/* Close menu */
$(".sidetrack__close").click(function() {
    $(".recipeContent").addClass("recipeContent--reset");
    $(".recipesList__item").addClass("recipesList__item--slide");
    $(".recipeSingle").removeClass("recipeSingle--active");
    $(".sidetrack").removeClass("sidetrack--active");
    $(".ingredientsTitle").removeClass("ingredientsTitle--active");
    $(".info").removeClass("info--active");
    $(".ingredient").removeClass("ingredient--active");
    $(".line").removeClass("line--active");

    setTimeout(function() {
        $(".recipesList__item").addClass("recipesList__item--reset");
        $(".recipesList__item").removeClass("recipesList__item--slide");
        $(".recipesList__item").removeClass("recipesList__image--active");
        $(".recipesList__overlap").addClass("recipesList__overlap--reset");
    }, 800);

    setTimeout(function() {
        $(".recipeContent").removeClass("recipeContent--reset");
        $(".recipeContent").addClass("recipeContent--active");
        $(".recipesList__overlap").removeClass("recipesList__overlap--reset");
        $(".recipesList__overlap").addClass("recipesList__overlap--slide");
        $(".recipesList__image").addClass("recipesList__image--reset");
        $(".recipesList__item").removeClass("recipesList__item--reset");
    }, 1100);
})
