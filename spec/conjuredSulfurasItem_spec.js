const { ConjuredSulfurasItem } = require('../src/gilded_rose');

describe('ConjuredSulfurasItem', () => {
  it('não deve alterar a qualidade quando o método updateQuality é chamado', () => {
    const conjuredSulfuras = new ConjuredSulfurasItem('Conjured Sulfuras, Hand of Ragnaros', 5, 80);
    conjuredSulfuras.updateQuality();
    expect(conjuredSulfuras.quality).toEqual(80);
  });

  it('não deve alterar o sellIn quando o método updateQuality é chamado', () => {
    const conjuredSulfuras = new ConjuredSulfurasItem('Conjured Sulfuras, Hand of Ragnaros', 5, 80);
    conjuredSulfuras.updateQuality();
    expect(conjuredSulfuras.sellIn).toEqual(5);
  });

});
