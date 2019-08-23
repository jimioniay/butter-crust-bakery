import React from 'react';
import Currency from 'react-currency-formatter';

const CurrencyFormmater = ({ amount }) => (
  <Currency
    quantity={amount}
    currency="NGN"
    // locale="en_EN"
    // pattern="##,### !"
    // decimal=","
    // group="."
  />
);
export default CurrencyFormmater;
