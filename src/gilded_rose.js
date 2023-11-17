class Item {
    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  
    updateQuality() {
      if (this.quality > 0) {
        this.quality--;
  
        if (this.sellIn < 0) {
          this.updateQualityAfterExpiration();
        }
      }
  
      this.updateSellIn();
    }
  
    updateQualityAfterExpiration() {
      if (this.quality > 0) {
        this.quality--;
      }
    }
  
    updateSellIn() {
      if (this.name !== 'Sulfuras, Hand of Ragnaros') {
        this.sellIn--;
      }
    }
  }
  
  class AgedBrieItem extends Item {
    updateQuality() {
      if (this.quality < 50) {
        this.quality++;
      }
  
      this.updateSellIn();
    }
  
    updateQualityAfterExpiration() {
      if (this.quality < 50) {
        this.quality++;
      }
    }
  }
  
  class BackstagePassesItem extends Item {
    updateQuality() {
      if (this.quality < 50) {
        this.quality++;
  
        if (this.sellIn < 11) {
          this.increaseQualityIfPossible();
        }
  
        if (this.sellIn < 6) {
          this.increaseQualityIfPossible();
        }
      }
  
      this.updateSellIn();
  
      if (this.sellIn < 0) {
        this.quality = 0;
      }
    }
  
    increaseQualityIfPossible() {
      if (this.quality < 50) {
        this.quality++;
      }
    }
  }
  
  class ConjuredItem extends Item {
    updateQuality() {
      super.updateQuality();
      if (this.quality > 0) {
        this.quality--;
      }
    }
  
    updateQualityAfterExpiration() {
      super.updateQualityAfterExpiration();
      if (this.quality > 0) {
        this.quality--;
      }
    }
  }
  
  class Shop {
    constructor(items = []) {
      this.items = items.map(item => {
        switch (item.name) {
          case 'Aged Brie':
            return new AgedBrieItem(item.name, item.sellIn, item.quality);
          case 'Backstage passes to a TAFKAL80ETC concert':
            return new BackstagePassesItem(item.name, item.sellIn, item.quality);
          case 'Conjured':
            return new ConjuredItem(item.name, item.sellIn, item.quality);
          default:
            return new Item(item.name, item.sellIn, item.quality);
        }
      });
    }
  
    updateQuality() {
      for (const item of this.items) {
        item.updateQuality();
      }
  
      return this.items;
    }
  }
  
  module.exports = {
    Item,
    AgedBrieItem,
    BackstagePassesItem,
    ConjuredItem,
    Shop
  };
  