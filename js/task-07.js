const inputRange = document.querySelector('#font-size-control')
inputRange.addEventListener('input', checkFontSize)
let span = document.querySelector('#text')

function checkFontSize (event){
    span.style.fontSize = event.target.value + 'px';
}


