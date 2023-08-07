const { mongerInventory } = require("./fishMonger.js");
const fishMenu = (maxBudget) => {
  let newArr = [];
  const total = mongerInventory(maxBudget);
  for (let item of total) {
    newArr.push(`<h1>Menu</h1>
<article class="menu">
<h2>${item.species}</h2>
    <section class="menu__item">${item.species} Soup</section>
    <section class="menu__item">${item.species} Sandwich</section>
    <section class="menu__item">Grilled ${item.species}</section>
</article>`);
  }
  return newArr.toString()
};
fishMenu();
module.exports = { fishMenu };
