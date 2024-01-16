// COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel")
const add = document.getElementById('add')
let count = 0; 


increaseBtn.onclick = function(){
    // var addSmth = add.innerHTML += `<li>apple</li>`;
    count++;
    countLabel.textContent = count;
    addSmth;
}
decreaseBtn.onclick = function(){
    // var lastApple = add.lastElementChild;
    // add.removeChild(lastApple)
    count--;
    countLabel.textContent = count;
    addSmthg
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.innerText = count;
}