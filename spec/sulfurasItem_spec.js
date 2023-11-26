const { SulfurasItem } = require('../src/gilded_rose');

describe('SulfurasItem', () => {
  it('não deve alterar a qualidade quando o método updateQuality é chamado', () => {
    const sulfuras = new SulfurasItem('Sulfuras, Hand of Ragnaros', 5, 80);
    sulfuras.updateQuality();
    expect(sulfuras.quality).toEqual(80);
  });

  it('não deve alterar o sellIn quando o método updateQuality é chamado', () => {
    const sulfuras = new SulfurasItem('Sulfuras, Hand of Ragnaros', 5, 80);
    sulfuras.updateQuality();
    expect(sulfuras.sellIn).toEqual(5);
  });

});
