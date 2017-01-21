$("#logInFormShow").click(function() {
    $("#signUpForm").hide();
    $("#logInForm").show();
});

$("#signUpFormShow").click(function() {
    $("#signUpForm").show();
    $("#logInForm").hide();
});

$('#diary').bind('input propertychange', function() {
    $.ajax({
        method: "POST",
        url: "updatedatabase.php",
        data: { content: $("#diary").val() }
    });
});