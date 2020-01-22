import React from 'react';
import './Rate.css';

import Calc from "../Calculator/Calc";

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      currencyRate: {},
    };
    this.currency = ['USD', 'RUB', 'CAD', 'PHP']; // PHP - Филиппинский песо)))))))) UAH не смог добавить из-за отсутсвия данных в используемом API
    this.getRate();
  }

  getRate = () => {
    fetch('https://api.exchangeratesapi.io/latest')
      .then(data => {
        return data.json();
      })
      .then(data => {
        console.log(data);
        this.setState({date: data.date});
        let result = {};
        for (let i = 0;i <  this.currency.length; i++){
          result[this.currency[i]] = data.rates[this.currency[i]]
        }
        console.log(result);
        this.setState({currencyRate: result})
      })
  };

  render() {
    return (
      <div className="rate">
        <h3>Exchange rates on {this.state.date}</h3>
        <div className="flex-container">
          {Object.keys(this.state.currencyRate).map((keyName, i) => (
            <div className="block flex-item" key={keyName}>
              <div className="currency-name">{keyName}</div>
              <div className="currency-in">{this.state.currencyRate[keyName].toFixed(2)}*</div>
              <p>* You can buy fo one EUR</p>
            </div>
          )
          )}
        </div>
        <Calc rate={this.state.currencyRate}/>
      </div>
    );
  }
}

export default Rate;
