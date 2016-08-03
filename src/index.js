class MaskPrice {
  constructor(options = {}) {
    this.options = Object.assign({
      cents: true
    }, options);
  }

  mask(value) {
    let cents = 0;
    let price = value.toString().match(/\d/g);

    if (this.options.cents === true) {
      cents = Number(price.join(''));
    }

    price.splice(price.length - 2, 0, '.');
    price = `${new Number(price.join('')).toFixed(2)}`;

    if (this.options.cents === true) {
      return {
        cents,
        price
      };
    }

    return price;
  }
};

export default (options) => {
  return new MaskPrice(options);
};
