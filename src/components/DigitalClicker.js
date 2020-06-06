// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends Component {

  constructor(props) {
    super(props)
    this.state = {
      timesClicked: 0
    }
  }

  handleTimesClicked = () => {
          this.setState(prevState => {
               return { timesClicked: prevState.timesClicked + 1 };
          });
     }

  render() {
    return (
      <div>
      <button onClick={this.handleTimesClicked}>Clicked {this.state.timesClicked}</button>
      </div>
    );
  }

}

export default DigitalClicker;
