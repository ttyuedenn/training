let items = [
  { name: "Shampoo", price: 760, category: "essential" },
  { name: "Oil", price: 350, category: "non-essential" },
  { name: "Chocolate", price: 50, category: "non-essential" },
  {name: "Coffee", price: 1180, category: "non-essential"},
];

let budget = 800;

function canBuy(item, availableBudget) {
  if (items.price <= availableBudget) {
    return `You can buy ${items.name}`;
  } else {
    if (items.category === "essential") {
      return `You cannot afford ${items.name}. Maybe skip a non-essential`;
    } else {
      return `You cannot afford ${items.name}`;
    }
  }
}

console.log(canBuy(items[0], budget));
console.log(canBuy(items[1], budget));
console.log(canBuy(items[2], budget));
console.log(canBuy(items[3], budget));

