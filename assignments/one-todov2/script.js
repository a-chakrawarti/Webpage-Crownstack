'use-strict;'

const taskElement = document.getElementById('input-task');
const listElement = document.getElementById('task-list');

function inputTask() {
    var taskValue = taskElement.value;
    if (taskValue == '') {return null;}
    addTask(taskValue);
    taskElement.value = '';
}

function addTask(taskName) {
    var li = document.createElement('li');
    li.setAttribute("id", taskName);

    // create a span element to hold the task text
    var taskTextElement = document.createElement('span'); 
    taskTextElement.setAttribute("class", "task-text");
    taskTextElement.innerHTML = taskName;

    li.appendChild(taskTextElement);
    listElement.appendChild(li);

    // edit button
    var editButton = document.createElement('span')
    editButton.setAttribute("class", "edit-btn");
    editButton.setAttribute("onclick", "editTask(this)");

    // delete button
    var deleteButton = document.createElement('span')
    deleteButton.setAttribute("class", "delete-btn");
    deleteButton.setAttribute("onclick", "deleteTask(this)");

    // done button
    var doneButton = document.createElement('span')
    doneButton.setAttribute("class", "done-btn");
    doneButton.setAttribute("onclick", "doneTask(this)");

    // append buttons
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    li.appendChild(doneButton);
}

taskElement.addEventListener('keyup', event => {
    if (event.key === 'Enter') { // event.keyCode is deprecated, https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
        inputTask()
    } 
}, false)

function doneTask(btn) {
    var ele = document.getElementById(btn.parentNode.id);
    ele.style.textDecoration = "line-through";
    ele.style.backgroundColor = "gray";

    // blur the text content when done
    var textSpan = document.getElementsByClassName('task-text');
    textSpan[textSpan.length -1].style.filter = "blur(1.5px)";

    // hide the tick element when clicked 
    var doneBtnElement = document.getElementsByClassName(btn.className);
    console.log(doneBtnElement[doneBtnElement.length - 1]);
    doneBtnElement[doneBtnElement.length - 1].style.display = "None";
}

function deleteTask(btn) {
    var ele = document.getElementById(btn.parentNode.id);
    listElement.removeChild(ele);
}


function editTask(btn) {   
    taskElement.value = btn.parentNode.id;
    deleteTask(btn);
}