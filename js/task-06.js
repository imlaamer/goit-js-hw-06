const input = document.querySelector('input[data-length="6"]');
input.addEventListener('blur', checkValidationInput)

function checkValidationInput (event) {
const inpuValue = event.target.value.trim()

if (inpuValue.length == input.dataset.length ) {
    input.classList.remove('invalid');
    input.classList.add('valid');
   
} else {
    input.classList.add('invalid');}

}
