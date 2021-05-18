const area1 = document.getElementById("input-area");
const area2 = document.getElementById("output-area");

area1.addEventListener(
    'keyup',
    (e) => area2.value = e.target.value.split("").reverse().join("")
);