function notify(name) {
    alert(`You clicked on ${name}`);
}


let colorId = document.getElementById("bgcolor");
let colorValueId = document.getElementById("color-value");
colorId.addEventListener('input', function (val) {
    // console.log(val.target.value);
    document.body.style.backgroundColor = val.target.value;
    colorValueId.innerHTML = `${val.target.value}`;
});

// let canvas = document.getElementById('myCanvas');
// let canvasContext = canvas.getContext("2d");
// // canvasContext.moveTo(0,0);
// // canvasContext.lineTo(500,500);
// // canvasContext.stroke();
// // gradient

// var grad = canvasContext.createLinearGradient(0,0,300,0)
// grad.addColorStop(0, "red");
// grad.addColorStop(1, "green");

// // fill
// canvasContext.fillStyle = grad;
// canvasContext.fillRect(0,10,290,190);