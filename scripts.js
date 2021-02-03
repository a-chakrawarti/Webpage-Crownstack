function notify(name) {
    alert(`You clicked on ${name}`);
}

function changeBackground() {
    let colorId = document.getElementById('bgcolor');
    let colorValue = colorId.value;
    document.body.style.backgroundColor = colorValue;
}