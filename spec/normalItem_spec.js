const { NormalItem } = require('../src/gilded_rose');

describe('NormalItem', () => {
  
  it('deve diminuir a qualidade (quality) em 1 quando a data de venda (sellIn) é maior que 0', () => {
    const normalItem = new NormalItem('Normal Item', 5, 10);
    normalItem.updateQuality();
    expect(normalItem.quality).toEqual(9);
  });

  it('deve diminuir a qualidade (quality) em 2 quando data de venda (sellIn) é menor do que 0', () => {
    const normalItem = new NormalItem('Normal Item', -1, 10);
    normalItem.updateQuality();
    expect(normalItem.quality).toEqual(8);
  });

  it('a qualidade (quality) não deve ser negativa', () => {
    const normalItem = new NormalItem('Normal Item', 10, -1);
    normalItem.updateQuality();
    expect(normalItem.quality).toEqual(0);
  });

  it('a qualidade (quality) não deve ultrapassar 50', () => {
    const normalItem = new NormalItem('Normal Item', 10, 51);
    normalItem.updateQuality();
    expect(normalItem.quality).toEqual(50);
  });
  
});
