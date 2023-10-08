const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')

function createItems() {
  const fragment = document.createDocumentFragment();
  ingredients
  .map(ingredient => { 
    let item = document.createElement('li');
    item.textContent = ingredient;
    item.classList.add('item');
    fragment.append(item)
  })
  ingredientsList.append(fragment);
}
createItems();
