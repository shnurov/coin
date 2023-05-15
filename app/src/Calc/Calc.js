import React from "react"
import "./Calc.css";

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    }
  }
  static getDerivedStateFromProps(props, state) {
    return { rate: props.rate }
  }
  calcRate = (e) => {
    e.preventDefault();
    let elements = e.target.elements;
    let countCurrency = elements["count-currency"].value;
    let typeCurrency = elements["type-currency"].value;
    this.setState({result: (countCurrency / this.state.rate[typeCurrency]).toFixed(2)})
  }
  render() {
    return (
      <section className="calc container">
        <h3>Калькулятор обмена</h3>
        <div className="calc-form">
          <form onSubmit={this.calcRate}>
            <input type="number" defaultValue="0" name="count-currency" />
            <select name="type-currency" id="" >
              {Object.keys(this.props.rate).map((keyName, i) =>
              (
                <option key={keyName} value={keyName}>{keyName}</option>
              )
              )}
            </select>
            <input type="submit" value="Рассчитать" />
          </form>
        </div>
        <div className="calc-res">
          <h3>Результат</h3>
          <ul>
            <li>EUR {this.state.result}</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Calc;
