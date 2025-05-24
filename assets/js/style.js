let num = prompt("Write the number");

document.querySelector('.num').textContent = num;

function addOne() {
    num++;
    document.querySelector('.num').textContent = num;
}