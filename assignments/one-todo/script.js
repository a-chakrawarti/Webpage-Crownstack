'use-strict;'

const listElement = document.getElementById('task-list');

function setTask(taskName) {
    if (taskName == '') {alert('Task cannot be blank!');}
    else {
        console.log(taskName);
        // var listElement = document.getElementById('task-list');
        // var listText = document.createElement('span');
        // listText.setAttribute("id", taskName);
        // listText.innerText = taskName;
        var li = document.createElement('li');
        // li.appendChild(listText);
        li.setAttribute("id", taskName);
        li.appendChild(document.createTextNode(taskName));
        listElement.appendChild(li);

        // edit button
        var editButton = document.createElement('button')
        editButton.innerText = "Edit"
        editButton.setAttribute("id", taskName);
        editButton.setAttribute("onclick", "editTask(this.id)");

        // delete button
        var deleteButton = document.createElement('button')
        deleteButton.innerText = "Delete"
        deleteButton.setAttribute("id", taskName);
        deleteButton.setAttribute("onclick", "deleteTask(this.id)");

        // append button
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        
    }
}

listElement.addEventListener('click', doneTask, false);

// Reference: https://developer.mozilla.org/en-US/docs/Web/API/Event/target
function doneTask(event) {
    if (event.target.tagName === 'LI') {
        event.target.style.textDecoration = "line-through";
    }
}

function deleteTask(id) {
    var ele = document.getElementById(id);
    listElement.removeChild(ele);
}


function editTask(id) {
    var taskElement = document.getElementById('new-task');
    taskElement.value = id;
    deleteTask(id);
}

function addTask() {
    var taskElement = document.getElementById('new-task');
    var taskValue = taskElement.value;
    setTask(taskValue);
    taskElement.value = '';
}