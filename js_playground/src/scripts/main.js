(function() {
    'use strict';


    var box_inner = {};
    const BOX_CLASSNAME = 'drag-box';
    const BTN_CLASSNAME = 'remove-btn';

    document.onmousedown = function(e) {
        var box_wrapper = document.getElementById('box-wrapper');
        var drop_area = document.getElementById('drop-area');
        var box = e.srcElement || e.target;

        if (box.className == BTN_CLASSNAME) {
            box_wrapper.appendChild(box.parentNode);
            box.parentNode.style.cssText = 'cursor:move; pointer-events:auto;';
            box.style.display = 'none';
        }
        if (box.className != BOX_CLASSNAME) {
            return;
        }

        box_inner.positionX = e.offsetX;
        box_inner.positionY = e.offsetY;


        box.onmousemove = function(e) {
            box.style.position = 'absolute';
            box.style.left = e.pageX - box_inner.positionX + 'px';
            box.style.top = e.pageY - box_inner.positionY + 'px';
        }


        box.onmouseup = function() {
            var box_pos = box.getBoundingClientRect();
            var drop_area_pos = drop_area.getBoundingClientRect();
            box.onmousemove = null;
            box.style.position = 'static';

            if (box_pos.left < drop_area_pos.left ||
                box_pos.top < drop_area_pos.top ||
                box_pos.right > drop_area_pos.right ||
                box_pos.bottom > drop_area_pos.bottom) {
                    // continue
            } else {
                drop_area.appendChild(box);
                box.style.cssText = 'cursor:auto; pointer-events:none;';
                box.querySelector('div.' + BTN_CLASSNAME).style.display = 'block';
            }

            if (drop_area.querySelectorAll('div.' + BOX_CLASSNAME).length > 0) {
                drop_area.querySelector('span').style.display = 'none';
            }
        }
    }

 })();

(function() {
    'use strict';


    var view_holder = {
        header: 'header',
        main: 'main-container'
    }

    _init();

    function _init() {
        _loadView('header', view_holder.header);
    }


    window.onclick = function(e) {
        var view = e.path[0].attributes[0].value;

        if (typeof view != 'undefined') {
            _loadView(view, view_holder.main);
        }
    }


    function _loadView (view, view_holder) {
        var con = document.getElementById(view_holder);
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                con.innerHTML = xhr.responseText;
            }
        }

        xhr.open("GET", "src/views/" + view + ".html", true);
        xhr.setRequestHeader('Content-type', 'text/html');
        xhr.send();
    }

})();

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
