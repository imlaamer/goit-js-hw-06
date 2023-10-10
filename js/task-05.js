const span = document.querySelector('#name-output')
const input = document.querySelector('#name-input')

input.addEventListener('input', changeCurrentName)

function changeCurrentName(event) {
    const currentValue = event.target.value.trim()
    const spanText = span.textContent;

    if(currentValue == '') {
        // span.textContent = 'Anonymous'; 
        span.textContent = spanText; //не впевнена як вірно. ідея була в тому,якщо наприклад зміниться розмітка в html не змінювати скрипт
        return;
    }
    span.textContent = currentValue;
}

