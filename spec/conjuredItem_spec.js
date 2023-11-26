const { ConjuredItem } = require('../src/gilded_rose');

describe('ConjuredItem', () => {
  it('deve diminuir a qualidade (quality) em 2 quando a data de venda (sellIn) é maior que 0', () => {
    const conjured = new ConjuredItem('Conjured Mana Cake', 3, 6);
    conjured.updateQuality();
    expect(conjured.quality).toEqual(4);
  });

  it('deve diminuir a qualidade (quality) em 4 quando a data de veda (sellIn) é menor 0', () => {
    const conjured = new ConjuredItem('Conjured Mana Cake', -1, 6);
    conjured.updateQuality();
    expect(conjured.quality).toEqual(2);
  });

  it('a qualidade (quality) não deve ser negativa', () => {
    const conjured = new ConjuredItem('Conjured Mana Cake', 10, -1);
    conjured.updateQuality();
    expect(conjured.quality).toEqual(0);
  });
});
