const { boatInventory } = require("./fishingBoat.js");
 const availableInventory = boatInventory()
const mongerInventory = (chefsBudget) => {
  let mongerBuys = [];
  let inventoryCopy = [...availableInventory];
  for (let item of inventoryCopy) {
    if (item.price < 7.5 && item.amount >= 10) {
      item.amount = 10
      mongerBuys.push(item);
    }
  }
  return chefsChoice(mongerBuys, chefsBudget)
//deep copy vs shadaow copy
 
};
// mongerInventory(boatInventory)

const chefsChoice = (mongerBuys, chefsBudget) => {
  let chefsBuys = [];
  for (let item of mongerBuys) {
    if (chefsBudget >= item.price) {
      let itemCopy = {...item};
      itemCopy.amount *= .5
      chefsBuys.push(itemCopy);
    }
  }
  return chefsBuys;
};

module.exports = { mongerInventory };



