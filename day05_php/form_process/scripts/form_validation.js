$("#submit-btn").click(function() {
    var values = [$("#email").val(), $("#subject").val(), $("#message").val()];
    var errors = new Array();
    var passEmail;
    var passSubject;
    var passMessage;

    if (values[0] == "") {
        $("#emailError").html("<img src='images/error-icon.png' style='height:20px;margin-top:5px;position:absolute;'><span style='margin-left:30px;'>Email is missing</span>");
        $("#emailError").show();
        $("#submit-success").hide();
    } else if (isEmail(values[0]) == false) {
        $("#emailError").html("<img src='images/error-icon.png' style='height:20px;margin-top:5px;position:absolute;'><span style='margin-left:30px;'>Your email address is not valid</span>");
        $("#emailError").show();
        $("#submit-success").hide();
    } else {
        $("#emailError").hide();
        passEmail = true;
    }

    if (values[1] == "") {
        $("#subjectError").html("<img src='images/error-icon.png' style='height:20px;margin-top:5px;position:absolute;'><span style='margin-left:30px;'>Subject is missing</span>");
        $("#subjectError").show();
        $("#submit-success").hide();
    } else {
        $("#subjectError").hide();
        passSubject = true;
    }

    if (values[2] == "") {
        $("#messageError").html("<img src='images/error-icon.png' style='height:20px;margin-top:5px;position:absolute;'><span style='margin-left:30px;'>Message is missing</span>");
        $("#messageError").show();
        $("#submit-success").hide();
    } else {
        $("#messageError").hide();
        passMessage = true;
    }

    if (passEmail && passMessage && passSubject) {
        $("#submit-success").html("<img src='images/submit-icon.png' style='height:25px; margin:18px 8px 0 8px;position:absolute;'><span style='margin-left:40px;'>Your message was sent, we'll get back to you ASAP!</span>");
        $("#submit-success").show();
    }
});

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}