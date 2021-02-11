'use-strict;'

const listElement = document.getElementById('task-list');
const taskElement = document.getElementById('new-task');

function setTask(taskName) {
    if (taskName == '') {alert('Task cannot be blank!');}
    else {
        // console.log(taskName);
        var li = document.createElement('li');
        var taskTextElement = document.createElement('span'); 
        taskTextElement.setAttribute("class", "task-text");
        taskTextElement.innerHTML = taskName;
        li.setAttribute("id", taskName);
        // li.appendChild(document.createTextNode(taskName));
        li.appendChild(taskTextElement);
        listElement.appendChild(li);

        // edit button
        var editButton = document.createElement('span')
        // editButton.innerText = "Edit"
        // editButton.setAttribute("id", taskName);
        editButton.setAttribute("class", "edit-btn");
        editButton.setAttribute("onclick", "editTask(this)");

        // delete button
        var deleteButton = document.createElement('span')
        // deleteButton.innerText = "Delete"
        // deleteButton.setAttribute("id", taskName);
        deleteButton.setAttribute("class", "delete-btn");
        deleteButton.setAttribute("onclick", "deleteTask(this)");

        // done button
        var doneButton = document.createElement('span')
        // doneButton.setAttribute("id", taskName);
        doneButton.setAttribute("class", "done-btn");
        doneButton.setAttribute("onclick", "done(this)");

        // append buttons
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        li.appendChild(doneButton);
        
    }
}

function done(pid) {
    var ele = document.getElementById(pid.parentNode.id);
    ele.style.textDecoration = "line-through";
    ele.style.backgroundColor = "gray";
}

taskElement.addEventListener('keyup', event => {
    if (event.key === 'Enter') { // event.keyCode is deprecated, https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
        console.log('Event fired!')
        addTask()
    } 
}, false)

function deleteTask(pid) {
    var ele = document.getElementById(pid.parentNode.id);
    listElement.removeChild(ele);
}


function editTask(pid) {   
    taskElement.value = pid.parentNode.id;
    deleteTask(pid);
}

function addTask() {
    var taskValue = taskElement.value;
    setTask(taskValue);
    taskElement.value = '';
}