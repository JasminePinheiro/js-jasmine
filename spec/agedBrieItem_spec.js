const { AgedBrieItem } = require('../src/gilded_rose');

describe('AgedBrieItem', () => {

  it('deve aumentar a qualidade (quality) em 1 quando o método updateQuality é chamado', () => {
    const agedBrie = new AgedBrieItem('Aged Brie', 2, 0);
    agedBrie.updateQuality();
    expect(agedBrie.quality).toEqual(1);
  });

  it('a qualidade (quality) não deve ultrapassar 50', () => {
    const agedBrie = new AgedBrieItem('Aged Brie', 2, 51);
    agedBrie.updateQuality();
    expect(agedBrie.quality).toEqual(50);
  });

});
