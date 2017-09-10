/**
 * Taking class name and type and return proper DOM element
 * 
 * @param {String} name 
 * @param {String} type 
 */
function _getElement(name, type) {
    switch(type) {
        case 'class': return document.getElementsByClassName(name); 
            break;
        case 'query': return document.querySelector('.' + name); 
            break;
        case 'query_all': return document.querySelectorAll('.' + name);
            break;
        case 'id': return document.getElementById(name);
            break;
    }
}

/**
 * Generating each column for content view
 * 
 * @param {Array} tasks 
 * @param {*} column 
 */
function _generateColumn(tasks, column) {
    tasks.forEach(function(task) {
        var create_element = '<div class="task" draggable="true">' +
                                '<h4 class="task__title">' +task.title+ '</h4>' +
                                '<div class="task__description">' +task.desc+ '</div>' +
                            '</div>';
        column.insertAdjacentHTML('beforeend', create_element);
    });
}

/**
 * Get current column info
 * 
 * @param {Array} column 
 */
function _prepareTaskList(column) {
    var tempColumn = [];

    [].forEach.call(column, function(task) {
        tempColumn.push({
            title: task.children[0].innerHTML,
            desc: task.children[1].innerHTML
        });
    });

    return tempColumn;
}