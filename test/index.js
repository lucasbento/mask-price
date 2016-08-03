import { expect } from 'chai';
import maskPrice from '../src';

describe('Price', () => {
  it('should contain cents', () => {
    const price = maskPrice({
      cents: true
    }).mask(430);
    const expectValue = {
      cents: 430,
      price: '4.30'
    };

    expect(price).to.deep.equal(expectValue);
  });

  it('should only contain price', () => {
    const price = maskPrice({
      cents: false
    }).mask(890);
    const expectValue = '8.90';

    expect(price).to.deep.equal(expectValue);
  });

  it('should return cents and masked price', () => {
    const price = maskPrice({
      cents: true
    }).mask('4.30');
    const expectValue = {
      cents: 430,
      price: '4.30'
    }

    expect(price).to.deep.equal(expectValue);
  });
});
