
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

class ConjuredItem extends Item {
    updateQuality() {
        const isConjured = this.name.includes('Conjured');
        const qualityDecrease = isConjured ? 2 : 1; // Diminui em dobro se for Conjured, caso contrário, diminui normalmente
        if (this.quality > 0) {
            this.quality -= qualityDecrease;
        }

        this.quality = Math.max(0, this.quality);
    }
}







const conjuredItem = new ConjuredItem('Conjured Sword', 5, 10);
console.log('Antes:', conjuredItem.quality); // Antes da atualização
conjuredItem.updateQuality();
console.log('Depois:', conjuredItem.quality); // Depois da atualização, deve ser reduzido em dobro
