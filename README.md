# mask-price

[![Build Status][travis-image]][travis-url]

Mask a given value as a price.

### Install

```bash
npm i mask-price -S
```

### Usage

```javascript
import maskPrice from 'mask-price';

const mask = maskPrice({
  locale: 'pt-BR', // (default is en-US) - format currency based on locale
  cents: false // (default is true) - true/false to return cents
});

console.log(mask(439)); // '4,39'
```

---
Kickstarted by [npm-boom][npm-boom]

[travis-image]: https://travis-ci.org/lucasbento/mask-price.svg?branch=master
[travis-url]: https://travis-ci.org/lucasbento/mask-price
[npm-boom]: https://github.com/reergymerej/npm-boom
