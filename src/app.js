import { data } from "./data/emoji.js";

const grid = document.querySelector(".grid");
const input = document.querySelector(".header__input");
const unicData = getUnicData(data);

function getUnicData(data) {
  const unicData = [];
  data.forEach((card) => {
    unicData.push({
      ...card,
      keywords: [...new Set(card.keywords.split(" "))].join(" "),
    });
  });
  return unicData;
}

function createCard(obj) {
  const card = document.createElement("div");
  card.className = "item";
  card.innerHTML = `<p class="item__emoji">${obj.symbol}</p>
                    <p class="item__title">${obj.title}</p>
                    <p class="item__keywords">${obj.keywords}</p>`;

  return card;
}

function inputSearch(event) {
  grid.innerHTML = "";
  let value = event.target.value.toLowerCase().trim();
  unicData
    .filter(
      (item) =>
        item.title.toLowerCase().includes(value) ||
        item.keywords.toLowerCase().includes(value)
    )
    .forEach((item) => grid.append(createCard(item)));
}

input.addEventListener("input", inputSearch);

unicData.forEach((card) => grid.append(createCard(card)));
