class Item {
    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }
  
  class Shop {
    constructor(items = []) {
      this.items = items;
    }
  
    updateQuality() {
  
      for (var i = 0; i < this.items.length; i++) {
        const isExpiration = this.items[i].name.includes('Conjured'); // se o item for expirado e conjurado ele diminui duas vezes mais rápido
  
        switch (this.items[i].name) {
          case 'Aged Brie':
            if (this.items[i].quality < 50) {
              this.items[i].quality += 1;
            }
            break;
  
          case 'Backstage passes to a TAFKAL80ETC concert':
            if (this.items[i].quality < 50) {
              this.items[i].quality += 1;
              if (this.items[i].sellIn < 11 && this.items[i].quality < 50) {
                this.items[i].quality += 1;
              }
              if (this.items[i].sellIn < 6 && this.items[i].quality < 50) {
                this.items[i].quality += 1;
              }
            }
            if (this.items[i].sellIn < 0) {
              this.items[i].quality = 0;
            }
            break;
  
          case 'Sulfuras, Hand of Ragnaros':
            if (this.items[i].quality != 80) {
              this.items[i].quality = 80;
            }
            break;
  
          case 'Conjured Sulfuras, Hand of Ragnaros': // item lendário vão ter uma qualidade imutavel
            if (this.items[i].quality != 80) {
              this.items[i].quality = 80;
            }
            break;
  
          default:
            if (this.items[i].quality > 0) {
              const qualityDecrease = isExpiration ? 2 : 1;
              this.items[i].quality -= qualityDecrease;
            }
            if (this.items[i].sellIn < 0) {
              const qualityDecreaseAfterExpiration = isExpiration ? 2 : 1;
              this.items[i].quality -= qualityDecreaseAfterExpiration;
  
            }
  
            if (this.items[i].quality < 0) {
              this.items[i].quality = 0;
            }
  
            if (this.items[i].quality > 50) {
              this.items[i].quality = 50;
            }
  
            break;
        }
  
        if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
          this.items[i].sellIn -= 1;
        }
      }
  
      return this.items;
    }
  }
  
  module.exports = {
    Item,
    Shop
  };
  