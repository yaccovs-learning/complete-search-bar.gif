let dbFruits = []
async function init() {
    dbFruits = await fetch('db.json')
        .then(response => response.json());
    search();

}
init();

const searchResults = document.querySelector('.search-results');
const inputSearch = document.querySelector('.input-search');

function addElementsResults(textFruit) {
    const div = document.createElement('div');
    console.log(textFruit)
    div.classList.add('item-result')
    div.innerText = textFruit;
    searchResults.appendChild(div);
}
function search() {
    const searchString = inputSearch.value;
    searchResults.innerHTML = ''
    dbFruits.filter((fruit) => {
        regex = new RegExp('.*' + searchString + '.*', "i");
        console.log(regex, fruit, regex.test(fruit))
        return regex.test(fruit);
    }).forEach(addElementsResults)

}
inputSearch.addEventListener('keyup', search);