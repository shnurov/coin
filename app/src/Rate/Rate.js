import React from 'react'
import './Rate.css';
import Calc from '../Calc/Calc';

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'data': '',
      'currencyRate': {}
    }
    this.getRate();
  }
  // getRate = () => {
  //   fetch('https://api.exchangeratesapi.io/v1/latest?access_key=K4RCrC0uRt3b9xSQzAr83Zneri9JimW0')
  //     .then(data => {
  //       return data.json();
  //     })
  //     .then(data => {
  //       console.log(data);
  //     });
  // }
  getRate = () => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "K4RCrC0uRt3b9xSQzAr83Zneri9JimW0");

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=RUB%2CKZT%2CGEL%2CUSD&base=EUR", requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ date: data.date });
        this.setState({ currencyRate: data.rates });
        this.setState({ rub: data.rates['RUB'] });
        this.setState({ kzt: data.rates['KZT'] });
      })
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <section className='rate container'>
        <h3>Курс ЕВРО на {this.state.date}</h3>
        <div className='items'>
          {Object.keys(this.state.currencyRate).map((keyName, i) =>
          (
            <div className='item' key={keyName}>
              <div className='item-name'>{keyName}</div>
              <div className='item-in'>{this.state.currencyRate[keyName]
              .toFixed(2)}</div>
            </div>
          )
          )}
        </div>
        <Calc rate={this.state.currencyRate}/>
      </section>
    );
  }
}

export default Rate;
