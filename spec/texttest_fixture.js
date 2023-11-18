// arquivo de testes

// qualidade não pode ser maior que 50
const { Shop, Item } = require("../src/gilded_rose"); // importa as classes 'Shop' 'Item'

// array de objetos representando diferentes tipos de produtos
// const items = [
//   new Item("+5 Dexterity Vest", 10, 20), // numero de dias pra vende-los e a qualidade
//   new Item("Aged Brie", 2, 0), // o Queijo Brie aumenta a qualidade a medida que ele envelhece
//   new Item("Elixir of the Mongoose", 5, 7),
//   new Item("Sulfuras, Hand of Ragnaros", 0, 80),
//   new Item("Sulfuras, Hand of Ragnaros", -1, 80),
//   new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
//   new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
//   new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),

//   // This Conjured item does not work properly yet
//   new Item("Conjured Mana Cake", 3, 6),
//   new Item("Conjured Sulfuras, Hand of Ragnaros", 0, 80),

// ];

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



const days = Number(process.argv[2]) || 2; // Obtém o número de dias a serem simulados a partir dos argumentos da linha de comando ou assume 2 dias como padrão 
const gildedRose = new Shop(items); // crie uma instancia da loja com os itens fornecidos 

// Um loop que itera sobre cada dia simulado, imprimindo o estado dos itens antes e depois de chamar updateQuality para cada dia.
console.log("OMGHAI!");
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
  gildedRose.updateQuality();
}
