let dbFruits = []
async function init() {
    dbFruits = await fetch('db.json')
        .then(response => response.json());
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

inputSearch.addEventListener('keyup', (e) => {
    const searchString = inputSearch.value;
    searchResults.innerHTML = ''
    if (searchString !== '') {
        dbFruits.filter((fruit) => {
            regex = new RegExp('.*' + searchString + '.*', "i");
            console.log(regex, fruit, regex.test(fruit))
            return regex.test(fruit);
        }).forEach(addElementsResults)
    }
});