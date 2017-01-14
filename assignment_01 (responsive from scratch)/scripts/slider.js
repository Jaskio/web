var slides = document.getElementsByClassName("slider-content");  //array of objects
var elements = document.getElementsByClassName("slider-box");   //array of specific elements
var index = 0;
var index768 = 0;
var browserWidth = 768;

widthCondition();

/* Conditions for left button */
$("#prev-btn").click(function() {
    index768 = index768 - 2;
    if (index768 < 0) {
        index768 = elements.length - 2;
    }
    if (window.innerWidth <= browserWidth) {
        displayElements(index768);
    } else {
        index--;
        if (index < 0) {
            index = slides.length - 1;
        }
        iterateArray(index);
    }
});

/* Conditions for right button */
$("#next-btn").click(function() {
    index768 = index768 + 2;
    if (index768 > elements.length - 1) {
        index768 = 0;
    }
    if (window.innerWidth <= browserWidth) {
        displayElements(index768);
    } else {
        index++;
        if (index > slides.length - 1) {
            index = 0;
        }
        iterateArray(index);
    }
});

/* Iteration through array and seting visibility for elements with specific index */
function iterateArray(index) {
    var i;
    for (i = 0; i < slides.length; i++) {
        if (i != index) {
            slides[i].style.display = "none";
        } else {
            slides[i].style.display = "flex";
        }
    }
}

/* Display two elements in html section for 768px width and below */
function displayElements(index768) {
    var i;
    for (i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
        if (i == index768 || i == index768 + 1) {
            elements[i].style.display = "block";
        } 
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        if (index768 < 4) {
            slides[0].style.display = "flex";
        } else if (index768 == 4 || index768 == 6) {
            slides[1].style.display = "flex";
        } else if (index768 == 8 || index768 == 10) {
            slides[2].style.display = "flex";
        }
    }
}

/* Check resolution */
function widthCondition() {
    if (window.innerWidth <= browserWidth) {
        displayElements(index768);
    } else {
        iterateArray(index);
    }
}