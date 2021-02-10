'use-strict;'


function setTask(taskName) {
    if (taskName == '') {alert('Task cannot be blank!');}
    else {
        console.log(taskName);
        var listElement = document.getElementById('task-list');
        var li = document.createElement('li');
        li.setAttribute("id", taskName);
        li.appendChild(document.createTextNode(taskName))
        listElement.appendChild(li);
    }
}

function addTask() {
    var taskElement = document.getElementById('new-task');
    var taskValue = taskElement.value;
    setTask(taskValue);
    taskElement.value = '';
}