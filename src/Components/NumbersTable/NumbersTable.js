import React, { Component } from "react";

class NumbersTable extends Component {
  
  colorChose = (e) => {
    let color = null;
    e % 2 === 0 ? (color = "even") : (color = "uneven");
    return color;
  };

  render() {
    let { limit } = this.props, tableArr = [];
    for (let i = 1; i <= limit; i++) {
      tableArr[i] = i;
    }

    return (
      <div>
        {tableArr.map((item, index) => {
          return (
            <div key={index} className="NumberTablesContainer">
                <div className={this.colorChose(index)}>{item}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default NumbersTable;
