const colors = ["green", "red", "blue", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    // get ramdom number between 0 - 4;
    const ramdomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[ramdomNumber];
    color.textContent = colors[ramdomNumber];
});
function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}