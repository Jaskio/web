(function() {
    'use strict';


    document.addEventListener('mousedown', slider);

    const Z_INDEX = 999;
    var image_counter = 0,
        call_once = true;

    function slider(e) {
        var images = document.querySelectorAll('.slider-holder > img'),
            active_image = e.srcElement,
            image_x = e.clientX;

        if (call_once && images.length != 0) {
            image_counter = -images.length;
            call_once = false;
        }

        if (image_counter == -1) {
            _resetIndexes(images);
            images[0].style.zIndex = Z_INDEX;
        }

        active_image.ondrag = function(e) {
            active_image.style.left = e.pageX - image_x + 'px';
        }

        active_image.ondragend = function(e) {
            if (image_x > e.pageX)
                active_image.style.left = '-' + e.srcElement.clientWidth + 'px';
            else
                active_image.style.left = e.srcElement.clientWidth + 'px';

                /*
                    tried to implement 'transitionend' listener instead of
                    setTimeout method - problem occurred after iterating trough
                    elements at the reset point
                */
                setTimeout(function(e) {
                    if (image_counter == 0)
                        image_counter = -images.length;

                    if (image_counter == -1)
                        images[0].style.zIndex = 0;
                    else
                        active_image.previousElementSibling.style.zIndex = Z_INDEX;

                    active_image.style.zIndex = ++image_counter;
                    active_image.style.left = '0px';
                }, 200);
        }
    }

    function _resetIndexes(images) {
        Array.prototype.forEach.call(images, function (img) {
                img.style.zIndex = 0;
        });
    }

})();
