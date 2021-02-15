/**
 * @author Anupam Chakrawarti
 */


'use-strict;'

const taskElement = document.getElementById('input-task');
const listElement = document.getElementById('task-list');

function inputTask() {
    var taskValue = taskElement.value;
    if (taskValue == '') {return null;}
    addTask(taskValue);
    clearText();
}

function clearText() {
    taskElement.value = '';
    cardColor = "rgb(41, 42, 47)";
}

var cardColor;
let colorId = document.getElementById("bgcolor");
colorId.addEventListener('input', function (val) {
    cardColor = val.target.value;
    // console.log(cardColor);
});

function addTask(taskName) {

    var li = document.createElement('li');
    li.setAttribute("id", taskName);
    li.setAttribute("style", `background-color:${cardColor}`);
    
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
    // console.log(ele.childNodes);
    ele.style.textDecoration = "line-through";
    // ele.style.backgroundColor = "gray";

    // blur the text content when done
    ele.childNodes[0].style.filter = "blur(1.5px)";

    // hide the tick element when clicked 
    ele.childNodes[3].style.display = "None";
}

function deleteTask(btn) {
    var ele = document.getElementById(btn.parentNode.id);
    listElement.removeChild(ele);
}

function editTask(btn) {   
    taskElement.value = btn.parentNode.id;
    deleteTask(btn);
}