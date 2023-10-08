const categories = document.querySelectorAll('.item');
let count = 0;

function countNumberOfCategories() {
categories.forEach(category => count++ )
return console.log('Number of categories: ', count);
}
countNumberOfCategories();

function getTitlesAndNumberOfItems () {
   categories.forEach(category => {
        console.log(`Category: ${category.firstElementChild.textContent}`); 
        console.log(`Elements: ${[...category.lastElementChild.children].length}`);
    });
return;
}
getTitlesAndNumberOfItems ();