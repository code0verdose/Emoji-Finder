import {data} from './emoji.js'

//Объявляю переменную с контейнером для карточек (item)
const gridContainer = document.querySelector('.grid')


//Функция для создания карточки (item)
function createItem(emoji, title, keywords) {
    let item = document.createElement('div');
    item.className = "item";

    let itemEmoji = document.createElement('p');
    itemEmoji.textContent = emoji;
    itemEmoji.className = 'item__emoji';
    item.append(itemEmoji)

    let itemTitle = document.createElement('h1');
    itemTitle.textContent = title;
    itemTitle.className = 'item__title';
    item.append(itemTitle)

    let itemKeywords = document.createElement('p');
    itemKeywords.textContent = keywords;
    itemKeywords.className = 'item__keywords';
    item.append(itemKeywords)

    gridContainer.append(item)
}


//Функция удаления повторяющихся слов в keywords
function delRepeat(data) {
    let newArray = data.map((value) => {
        return [...new Set(value.keywords.split(" ").sort())].join(" ");
    })
    data.forEach(function (item, index) {
        item.keywords = newArray[index]
    })
    return newArray;
}

delRepeat(data) //Вызов функции для удаления повторов


//Отрисовка всех карточек из массива объектов (data)
data.forEach((item) => createItem(item.symbol, item.title, item.keywords));


//Поиск по карточкам (item) v.0.1
// let input = document.querySelector('#input')
//
// function inputSearch() {
//     let item = document.querySelectorAll('.item');
//     input.onchange = function () {
//         let inputValue = input.value
//         for (let index of item) {
//             if (index.querySelector(".item__title").textContent !== inputValue) {
//                 index.style.display = 'none';
//             }
//         }
//     }
// }
//
// inputSearch() //Вызов функции поиска по карточкам (item)


// //Поиск по карточкам (item) v0.2
// let input = document.querySelector('#input')
//
// function inputSearch() {
//     let item = document.querySelectorAll('.item');
//     input.oninput = function () {
//         let inputValue = input.value;
//         let newData = data.filter((item) => item.title.toLowerCase().includes(inputValue.toLowerCase().trim()));
//         gridContainer.innerHTML = '';
//         return newData.forEach((item) => createItem(item.symbol, item.title, item.keywords));
//     }
// }
//
// inputSearch() //Вызов функции поиска по карточкам (item)


//Поиск по карточкам (item) v0.3

let input = document.querySelector('#input')

function inputSearch() {
    input.addEventListener('input', () => {
        let inputValue = input.value;
        let newData = data.filter((item) => item.title.toLowerCase().includes(inputValue.toLowerCase().trim()));
        gridContainer.innerHTML = '';
        return newData.forEach((item) => createItem(item.symbol, item.title, item.keywords));
    })
}

inputSearch() //Вызов функции поиска по карточкам (item)