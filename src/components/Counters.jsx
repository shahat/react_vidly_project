import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  render() {
    let {onDelete,onIncrement,onDecrement} = this.props ;
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2">
         Reset

        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
