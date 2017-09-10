/**
 * Global variables
 */
const DROP_ZONE = 'contentColumn__tasks',
      STORAGE_KEY = 'tasks';
var source_element,
    tasks = {
        todo: [
            {
                title: 'Setup project',
                desc: 'Dont rush'
            },
            {
                title: 'Get coffee',
                desc: 'Enter the kitchen and start preparing'
            }
        ],
        doing: [
            {
                title: 'Debugging',
                desc: '....'
            }
        ],
        done: [
            {
                title: 'Task finished',
                desc: 'Finally!'
            }
        ]
    };


/**
 * Load storage when page loads up or generate
 * the init 'tasks' object
 */
window.addEventListener('load', _load);

/**
 * Events
 */
document.addEventListener('dragstart', _dragStart);
document.addEventListener('dragenter', _dragEnter);
document.addEventListener('drag', _drag);
document.addEventListener('dragover', _dragOver);
document.addEventListener('dragleave', _dragLeave);
document.addEventListener('drop', _drop);
document.addEventListener('dragend', _dragEnd);


/**
 * Drop all tasks and save new state into storage
 */
function dropStorage() {
    localStorage.clear();
    location.reload();
}

/**
 * Add new task into storage
 */
function addTask() {
    var inputs = _getElement('formFields__input', 'query');
    tasks.todo.push({
        title: inputs.children[0].value,
        desc: inputs.children[1].value
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    location.reload();
}


