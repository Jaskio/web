function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$("#submitButton").click(function() {
    var emailMissing = "";
    var phoneMissing = "";
    var passwordMissing = "";
    var emailError = "";
    var phoneError = "";
    var passwordError = "";

    if (isEmail($("#email").val()) == false) {
        emailError += "<p>Your email address is not valid</p>";
    }

    if ($.isNumeric($("#phone").val()) == false) {
        phoneError += "<p>Your phone number is not numeric</p>"
    }

    if ($("#password").val() != $("#passwordConfirm").val()) {
        passwordError += "<p>Your passwords don't match</p>";
    }

    if ($("#email").val() == "") {
        $("#emailError").html("<p>Email is missing</p>");
    } else if (emailError != "") {
        $("#emailError").html(emailError);
    } else {
        $("#emailError").hide();
    }

    if ($("#phone").val() == "") {
        $("#phoneError").html("<p>Telephone is missing</p>");
    } else if (phoneError != "") {
        $("#phoneError").html(phoneError);
    } else {
        $("#phoneError").hide();
    }

    if ($("#password").val() == "") {
        $("#passwordError").html("<p>Password is missing</p>");
    } else if (passwordError != "") {
        $("#passwordError").html(passwordError);
    } else {
        $("#passwordError").hide();
    }
});