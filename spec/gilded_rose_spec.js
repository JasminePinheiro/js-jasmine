// arquivo de teste utilizando a bibiblioteca jasmine


var {Shop, Item} = require('../src/gilded_rose.js'); //importar as bibliotecas
describe("Gilded Rose", function() {

// Descreve um caso de teste que verifica se a propriedade name do primeiro item no array é igual a "fixme" após chamar o método updateQuality na instância de Shop
  
  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("fixme");
  });

});
