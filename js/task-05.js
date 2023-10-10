const span = document.querySelector('#name-output')
const input = document.querySelector('#name-input')

input.addEventListener('input', changeCurrentName)

function changeCurrentName(event) {
    const currentValue = event.target.value.trim()

    if(currentValue == '') {
       span.textContent = 'Anonymous'; 
        return;
    }
    span.textContent = currentValue;
}

