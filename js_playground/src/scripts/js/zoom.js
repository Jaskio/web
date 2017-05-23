(function() {
    'use strict';


    const INITIAL_SCALE = 1.0;
    const MAX_SCALE = 2.0;

    document.onmouseover = function(e) {
        var scale = INITIAL_SCALE;
        var images = document.querySelectorAll('.image');

        // mouse wheel zoom
        images[0].onwheel = function(e) {
            if (e.deltaY > 0) {
                if (scale <= INITIAL_SCALE)
                    scale = INITIAL_SCALE;
                else
                    scale -= 0.1;
            } else {
                if (scale >= MAX_SCALE)
                    scale = MAX_SCALE;
                else
                    scale += 0.1;
            }
            e.srcElement.style.transform = 'scale(' + scale + ', ' + scale + ')';
        }


        /*
            after zoomed in - need to implement grab and move, so the whole
            image can be inspected
        */


        // hover zoom
        images[1].onmouseover = function(e) {
            e.srcElement.style.transform = 'scale(' + MAX_SCALE + ', ' + MAX_SCALE + ')';
        }

        images[1].onmouseout = function(e) {
            e.srcElement.style.transform = 'scale(' + INITIAL_SCALE + ', ' + INITIAL_SCALE + ')';
        }
    }

})();
