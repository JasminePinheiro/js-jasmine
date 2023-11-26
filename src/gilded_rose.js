class Item {
    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  
    updateQuality() {
      throw new Error('O método updateQuality deve ser implementado nas classes filhas.');
    }
  }
  
  
  class AgedBrieItem extends Item {
    updateQuality() {
      this.quality = this.quality < 50 ? this.quality + 1 : this.quality;
      if(this.quality > 50){
        this.quality = 50
      }
    }
  }
  
  
  class BackstagePassItem extends Item {
    updateQuality() {
      if (this.quality < 50) {
        this.quality += 1;
        this.quality += (this.sellIn < 11 && this.quality < 50) ? 1 : 0;
        this.quality += (this.sellIn < 6 && this.quality < 50) ? 1 : 0;
      }
  
      this.quality = (this.sellIn < 0) ? 0 : this.quality;
    }
  }
  
  
  class SulfurasItem extends Item {
    updateQuality() {
      if (this.quality !== 80) {
        this.quality = 80;
      }
    }
  }
  
  
  class ConjuredItem extends Item {
    updateQuality() {
      const isConjured = this.name.includes('Conjured');
      const qualityDecrease = isConjured ? 2 : 1;
  
      if (this.quality > 0) {
        const fatorSellIn = this.sellIn <= 0 ? 2 : 1;
        this.quality -= qualityDecrease * fatorSellIn;
      }
  
      this.quality = Math.max(0, this.quality);
    }
  }
  
  class ConjuredSulfurasItem extends SulfurasItem {
    // Item lendário: qualidade imutável
  }
  
  class NormalItem extends Item {
    updateQuality() {
      const qualityDecrease = this.sellIn < 0 ? 2 : 1;
      if (this.quality > 0) {
        this.quality -= qualityDecrease;
      }
  
      this.quality = Math.max(0, this.quality);
      this.quality = Math.min(50, this.quality);
    }
  }
  
  class Shop {
    constructor(items = []) {
      this.items = items.map(item => this.createItem(item));
    }
  
    createItem(item) {
      switch (item.name) {
        case 'Aged Brie':
          return new AgedBrieItem(item.name, item.sellIn, item.quality);
  
        case 'Backstage passes to a TAFKAL80ETC concert':
          return new BackstagePassItem(item.name, item.sellIn, item.quality);
  
        case 'Sulfuras, Hand of Ragnaros':
          return new SulfurasItem(item.name, item.sellIn, item.quality);
  
        case 'Conjured Sulfuras, Hand of Ragnaros':
          return new ConjuredSulfurasItem(item.name, item.sellIn, item.quality);
  
        default:
          if (item.name.includes('Conjured')) {
            return new ConjuredItem(item.name, item.sellIn, item.quality);
          }
  
          return new NormalItem(item.name, item.sellIn, item.quality);
      }
    }
  
    updateQuality() {
      this.items.forEach(item => {
        item.updateQuality();
        if (item.name !== 'Sulfuras, Hand of Ragnaros') {
          item.sellIn -= 1;
        }
      });
  
      return this.items;
    }
  }
  
  module.exports = {
    Item,
    Shop,
    AgedBrieItem,
    BackstagePassItem,
    SulfurasItem,
    ConjuredItem,
    NormalItem,
    ConjuredSulfurasItem  
  };
  