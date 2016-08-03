import intl from 'intl';

class MaskPrice {
  constructor(options = {}) {
    this.options = Object.assign({
      cents: true,
      locale: 'en-US'
    }, options);
  }

  mask(value) {
    let cents = 0;
    let price = value.toString().match(/\d/g);

    if (this.options.cents === true) {
      cents = Number(price.join(''));
    }

    price.splice(price.length - 2, 0, '.');
    price = new intl.NumberFormat(this.options.locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price.join(''));

    if (this.options.cents === true) {
      return {
        cents,
        price
      };
    }

    return price;
  }
}

export default (options) => new MaskPrice(options);
