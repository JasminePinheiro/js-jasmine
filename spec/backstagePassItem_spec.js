const { BackstagePassItem } = require('../src/gilded_rose');

describe('BackstagePassItem', () => {
  it('deve aumentar a qualidade (quality) em 1 se a data de venda (sellIn) for maior que 10', () => {
    const backstagePass = new BackstagePassItem('Backstage Pass', 11, 20);
    backstagePass.updateQuality();
    expect(backstagePass.quality).toEqual(21);
  });

  it('deve aumentar a qualidade (quality) em 2 se a data de venda (sellIn) for 10 ou menos, mas maior que 5', () => {
    const backstagePass = new BackstagePassItem('Backstage Pass', 10, 20);
    backstagePass.updateQuality();
    expect(backstagePass.quality).toEqual(22);
  });

  it('deve aumentar a qualidade (quality) em 3 se a data de venda (sellIn) é igual ou menor que 5.', () => {
    const backstagePass = new BackstagePassItem('Backstage Pass', 5, 20);
    backstagePass.updateQuality();
    expect(backstagePass.quality).toEqual(23);
  });

  it('A qualidade (quality) do item vai direto à 0 quando a data de venda (SellIn) tiver passado', () => {
    const backstagePass = new BackstagePassItem('Backstage Pass', -1, 20);
    backstagePass.updateQuality();
    expect(backstagePass.quality).toEqual(0);
  });

});