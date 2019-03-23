import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    let classes = this.getBadgeClasses();

    return (
      <React.Fragment>
        <span className={classes}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">INCREMENT</button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
//question , depending on the value of the count change the color of the count button
