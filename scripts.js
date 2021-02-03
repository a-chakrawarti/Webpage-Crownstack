function notify(name) {
    alert(`You clicked on ${name}`);
}


let colorId = document.getElementById("bgcolor");
let colorValueId = document.getElementById("color-value");
colorId.addEventListener('input', function (val) {
    // console.log(val.target.value);
    document.body.style.backgroundColor = val.target.value;
    colorValueId.innerHTML = ` ${val.target.value}`;
});