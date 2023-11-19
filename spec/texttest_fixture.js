const { Shop, Item } = require("../src/gilded_rose");

const items = [
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("+5 Dexterity Vest", -1, 20), // vencida
  new Item("+5 Dexterity Vest", 10, 51),

  new Item("Aged Brie", 2, 0),

  new Item("Elixir of the Mongoose", 5, 7),

  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),

  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", -1, 20),

  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),

  new Item("Backstage passes to a TAFKAL80ETC concert", 9, 40),
  new Item("Backstage passes to a TAFKAL80ETC concert", 4, 40),

  new Item("Backstage passes to a TAFKAL80ETC concert", -1, 40),

  new Item("Conjured Mana Cake", 3, 6),
  new Item("Conjured Mana Cake", -1, 6),

  new Item("Conjured Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Conjured Sulfuras, Hand of Ragnaros", -1, 80),
];

const days = Number(process.argv[5]) || 5;
const gildedRose = new Shop(items);

console.log("OMGHAI!");
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  gildedRose.items.forEach(item =>
    console.log(`${item.name} | ${item.sellIn} | ${item.quality}`)
  );
  gildedRose.updateQuality();
}

console.log("\n");

// Teste que simula a chamada do método updateQuality em uma instância de Item 
const item = new Item("Conjured Mana Cake", 5, 10)

try {
  item.updateQuality();
} catch (error) {
  console.log(error.message);
}

console.log("-------- Fim do Teste --------");