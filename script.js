
const display = document.getElementsByClassName('counter-preview');
const incrementButton = document.getElementsByClassName('Buttonone');
const resetButton = document.getElementsByClassName('Buttontwo');
const decrementButton = document.getElementsByClassName('Buttonthree');

console.log(incrementButton);

let value = 0;

incrementButton[0].addEventListener('click',incrementbyone);
resetButton[0].addEventListener('click',reset);
decrementButton[0].addEventListener('click',decrementbyone);

function incrementbyone(){
    value += 1;
    display[0].textContent = value ;
}

function reset(){
    value = 0;
    display[0].textContent = value;
}

function decrementbyone(){
    value -= 1;
    display[0].textContent = value ;
}