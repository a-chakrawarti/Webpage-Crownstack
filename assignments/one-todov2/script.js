'use-strict;'

const listElement = document.getElementById('task-list');
const taskElement = document.getElementById('new-task');

function setTask(taskName) {
    if (taskName == '') {alert('Task cannot be blank!');}
    else {
        // console.log(taskName);
        var li = document.createElement('li');
        li.setAttribute("id", taskName);
        li.appendChild(document.createTextNode(taskName));
        listElement.appendChild(li);

        // edit button
        var editButton = document.createElement('span')
        // editButton.innerText = "Edit"
        editButton.setAttribute("id", taskName);
        editButton.setAttribute("class", "edit-btn");
        editButton.setAttribute("onclick", "editTask(this.id)");

        // delete button
        var deleteButton = document.createElement('span')
        // deleteButton.innerText = "Delete"
        deleteButton.setAttribute("id", taskName);
        deleteButton.setAttribute("class", "delete-btn");
        deleteButton.setAttribute("onclick", "deleteTask(this.id)");

        // append buttons
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        
    }
}

listElement.addEventListener('click', doneTask, false);

// Reference: https://developer.mozilla.org/en-US/docs/Web/API/Event/target
function doneTask(event) {
    if (event.target.tagName === 'LI') {
        event.target.style.textDecoration = "line-through";
        event.target.style.backgroundColor = "gray";
    }
}

taskElement.addEventListener('keyup', event => {
    if (event.key === 'Enter') { // event.keyCode is deprecated, https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
        console.log('Event fired!')
        addTask()
    } 
}, false)

function deleteTask(id) {
    var ele = document.getElementById(id);
    listElement.removeChild(ele);
}


function editTask(id) {   
    taskElement.value = id;
    deleteTask(id);
}

function addTask() {
    var taskValue = taskElement.value;
    setTask(taskValue);
    taskElement.value = '';
}