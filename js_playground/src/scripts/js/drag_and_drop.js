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
