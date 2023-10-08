let counterValue =  0;
const value = document.querySelector('#value');

const decrementButton = document.querySelector('button[data-action="decrement"]');
decrementButton.addEventListener('click', decrementValue);

function decrementValue() {
counterValue -=1;
value.textContent = counterValue;
}

const incrementButton = document.querySelector('button[data-action="increment"]')
const test = incrementButton.addEventListener('click', incrementValue) 

function incrementValue() {
counterValue +=1;
value.textContent = counterValue;
}




