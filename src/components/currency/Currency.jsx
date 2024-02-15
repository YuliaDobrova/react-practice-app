import React, { useState } from 'react';
import './Currency.css';
import MyButton from '../shared/button/MyButton';
import MyInput from '../shared/input/MyInput';

const Currency = () => {
  const [amount, setAmount] = useState('');

  const input_amount = document.getElementById('original-currency-amount');
  const from_currency = document.getElementById('from_currency');
  const to_currency = document.getElementById('to_currency');
  const exchange_rate = document.getElementById('exchange-rate');
  const output_amount = document.getElementById('output-text');
  const output_from = document.getElementById('from');
  const output_to = document.getElementById('to');

  const onExchangeClick = () => {
    [from_currency.value, to_currency.value] = [
      to_currency.value,
      from_currency.value,
    ];
    calculate();
  };

  let to_amount = 0;
  function calculate() {
    const from_currency_value =
      from_currency.value !== null ? from_currency.value : 'CAD';
    const to_currency_value = to_currency.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency_value}`)
      .then(res => res.json())
      .then(res => {
        const rate = res.rates[to_currency_value];
        exchange_rate.value = `${rate}`;
        to_amount = (input_amount.value * rate).toFixed(3);
        output_from.innerText = `${input_amount.value} ${from_currency_value}`;
        output_to.innerText = `${to_amount} ${to_currency_value}`;
        output_amount.style.display = 'block';
      });
  }

  const onExchangeBtnClick = () => {
    calculate();
  };

  const onInputChange = event => {
    setAmount(event.target.value);
  };

  return (
    <div className="CurrencyWrapper">
      <h1 className="CurrencyTitle">Currency Converter</h1>
      <p className="convert">
        Convert :
        <MyInput
          // type="number"
          type="text"
          id="original-currency-amount"
          placeholder="Enter Amount"
          value={amount}
          onChange={onInputChange}
        />
      </p>
      <div>
        <select className="CurrencySelect" id="from_currency">
          <option value="CAD" defaultChecked defaultValue>
            CAD
          </option>
          <option value="EUR">EUR</option>
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
        </select>
        <MyButton
          className="CurrencyExchangeBtn"
          id="exchange"
          onClick={onExchangeClick}
        >
          <div className="CurrencyArrows">↔</div>
        </MyButton>
        <select className="CurrencySelect" id="to_currency">
          <option value="USD" defaultChecked defaultValue>
            USD
          </option>
          <option value="CAD">CAD</option>
          <option value="EUR">EUR</option>
          <option value="UAH">UAH</option>
        </select>
      </div>
      <div className="exchange">
        Exchange Rate:
        <input type="text" id="exchange-rate"></input>
      </div>
      <MyButton
        className="CurrencyBtn"
        id="exchange_button"
        onClick={onExchangeBtnClick}
      >
        Exchange money now!
      </MyButton>
      <p id="output-text">
        <span className="CurrencyHelper" id="from"></span> converted to{' '}
        <span className="CurrencyHelper" id="to"></span>
      </p>
    </div>
  );
};

export default Currency;

// all currency example
// <option value="AED">AED</option>
// <option value="ARS">ARS</option>
// <option value="AUD">AUD</option>
// <option value="BGN">BGN</option>
// <option value="BRL">BRL</option>
// <option value="BSD">BSD</option>
// <option value="CAD">CAD</option>
// <option value="CHF">CHF</option>
// <option value="CLP">CLP</option>
// <option value="CNY">CNY</option>
// <option value="COP">COP</option>
// <option value="CZK">CZK</option>
// <option value="DKK">DKK</option>
// <option value="DOP">DOP</option>
// <option value="EGP">EGP</option>
// <option value="EUR">EUR</option>
// <option value="FJD">FJD</option>
// <option value="GBP">GBP</option>
// <option value="GTQ">GTQ</option>
// <option value="HKD">HKD</option>
// <option value="HRK">HRK</option>
// <option value="HUF">HUF</option>
// <option value="IDR">IDR</option>
// <option value="ILS">ILS</option>
// <option value="INR">INR</option>
// <option value="ISK">ISK</option>
// <option value="JPY">JPY</option>
// <option value="KRW">KRW</option>
// <option value="KZT">KZT</option>
// <option value="MXN">MXN</option>
// <option value="MYR">MYR</option>
// <option value="NOK">NOK</option>
// <option value="NZD">NZD</option>
// <option value="PAB">PAB</option>
// <option value="PEN">PEN</option>
// <option value="PHP">PHP</option>
// <option value="PKR">PKR</option>
// <option value="PLN">PLN</option>
// <option value="PYG">PYG</option>
// <option value="RON">RON</option>
// <option value="RUB">RUB</option>
// <option value="SAR">SAR</option>
// <option value="SEK">SEK</option>
// <option value="SGD">SGD</option>
// <option value="THB">THB</option>
// <option value="TRY">TRY</option>
// <option value="TWD">TWD</option>
// <option value="UAH">UAH</option>
// <option value="USD">USD</option>
// <option value="UYU">UYU</option>
// <option value="VND">VND</option>
// <option value="ZAR">ZAR</option>
