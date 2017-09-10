/**
 * Triggered when window loads
 */
function _load() {
    var columns = _getElement(DROP_ZONE, 'class');

    if (localStorage.tasks === undefined) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } else {
        tasks = JSON.parse(localStorage.getItem(STORAGE_KEY));
    }

    _generateColumn(tasks.todo, columns[0]);
    _generateColumn(tasks.doing, columns[1]);
    _generateColumn(tasks.done, columns[2]);
}

/**
 * Triggered when drag start
 * 
 * @param {Object} event 
 */
function _dragStart(event) {
    // event.dataTransfer.setData('text/plain', object);
    source_element = event.target;
    event.target.style.opacity = .95;
}

/**
 * Triggered when you enter dropzone
 * 
 * @param {Object} event 
 */
function _dragEnter(event) {
    if (event.target.className == DROP_ZONE) {
        event.target.style.background = '#D4D4D4';
    }
}

/**
 * Triggers while dragging
 * 
 * @param {Object} event 
 */
function _drag(event) {
    //
}

/**
 * Triggers while dragging over document
 * 
 * @param {Object} event 
 */
function _dragOver(event) {
    event.preventDefault();
}

/**
 * Triggered when you leave dropzone
 * 
 * @param {Object} event 
 */
function _dragLeave(event) {
    if (event.target.className == DROP_ZONE) {
        event.target.style.background = '';
    }
}

/**
 * Triggered when element is dropped
 * 
 * @param {Object} event 
 */
function _drop(event) {
    var columns = _getElement(DROP_ZONE, 'class');

    event.preventDefault();

    if (event.target.className == DROP_ZONE) {
        event.target.style.background = '';
        source_element.parentNode.removeChild(source_element);
        event.target.appendChild(source_element);
    }

    tasks.todo = _prepareTaskList(columns[0].children);
    tasks.doing = _prepareTaskList(columns[1].children);
    tasks.done = _prepareTaskList(columns[2].children);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

/**
 * Triggered when drag is finished
 * 
 * @param {Object} event 
 */
function _dragEnd(event) {
    event.target.style.opacity = '';
}