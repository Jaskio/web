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
