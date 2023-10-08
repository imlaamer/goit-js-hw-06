function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

}

const buttonChangeColor = document.querySelector('.change-color')
buttonChangeColor.addEventListener('click', changeColor)

function changeColor() {
  const widget = document.querySelector('.widget')
  let randomColor = getRandomHexColor();
  widget.style.backgroundColor = randomColor;
  
  const colorText = document.querySelector('.color') 
  colorText.textContent = randomColor;
}

