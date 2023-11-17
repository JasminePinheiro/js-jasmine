class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

// O construtor que inicializa uma instância de Shop com um array de itens. Se nenhum array for fornecido, é usado um array vazio como padrão.
class Shop {
  constructor(items=[]){
    this.items = items;
  }


// Itera sobre cada item na loja.
// Verifica o tipo de item e ajusta sua qualidade de acordo com as regras específicas para cada tipo de item.
// Atualiza o prazo de validade (sellIn) para todos os itens, exceto para "Sulfuras, Hand of Ragnaros".
// Verifica se o prazo de validade expirou e ajusta a qualidade conforme necessário.
// Retorna o array atualizado de itens.

  updateQuality() {

    // está percorrendo cada item na loja usando um loop 
    for (var i = 0; i < this.items.length; i++) {

      // Se o item não é "Aged Brie" ou "Backstage passes":
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {

        // Se a qualidade do item for maior que 0, e não for "Sulfuras," então a qualidade é decrementada
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }

        // Caso contrário (se for "Aged Brie" ou "Backstage passes"):
      } else {

        // Se a qualidade for menor que 50, a qualidade é incrementada.
        // Para "Backstage passes," há condições adicionais para incrementar a qualidade com base no valor de sellIn.
        // Se sellIn for menor que 11, incrementa a qualidade.
        // Se sellIn for menor que 6, incrementa novamente a qualidade.
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }

      // sellIn é decrementado para todos os itens, exceto "Sulfuras."
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }

      // Se sellIn for negativo, a qualidade é ajustada novamente com base nas regras específicas para cada tipo de item.
      // Para itens diferentes de "Aged Brie" e "Backstage passes," a qualidade é decrementada.
      // Para "Backstage passes," a qualidade é definida como zero.

      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
