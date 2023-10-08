const span = document.querySelector('#name-output')
const input = document.querySelector('#name-input')

input.addEventListener('input', changeCurrentName )

function changeCurrentName(event) {
    span.textContent = event.target.value;
}

