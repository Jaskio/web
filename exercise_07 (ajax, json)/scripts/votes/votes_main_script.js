$('#vote-btn').click(function() {
    var checkboxArray = document.getElementsByClassName("checkbox-input");
    var json = {
        chicken : checkCheckboxActive(checkboxArray[0]),
        beans : checkCheckboxActive(checkboxArray[1]),
        eggs: checkCheckboxActive(checkboxArray[2]),
        cheese: checkCheckboxActive(checkboxArray[3]),
        bread: checkCheckboxActive(checkboxArray[4])
    };
    addVote(json);
    uncheckBoxes(checkboxArray);
});

function checkCheckboxActive(checkboxArrayElement) {
    if (checkboxArrayElement.checked) {
        return 1;
    }
    return 0;
}

function uncheckBoxes(checkboxArray) {
    for (var i = 0; i < checkboxArray.length; i++) {
        checkboxArray[i].checked = false;
    }
}

document.getElementById('drag-box').onmousedown = function() {
    this.style.position = 'relative';
    var self = this;

    document.onmousemove = function(e) {
        self.style.left = e.pageX - (window.innerWidth - 280) + 'px';
        if (e.pageX < window.innerWidth - 280) {
            document.onmousemove = null;
            $("#click-drag-box").css("-webkit-animation", "fadeout 1s");
            setTimeout(function() {
                $("#click-drag-box").css("visibility", "hidden");
            }, 900);
        }
    }
    this.onmouseup = function() {
    document.onmousemove = null;
    }
}
document.getElementById('drag-box').ondragstart = function() {
     return false;
 }
