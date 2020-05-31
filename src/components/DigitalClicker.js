// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends Component {
    constructor() {
        super();

        // Define the initial state:
        this.state = {
            timesClicked: 0
        };
      }
    
    timesClicked= () => {
        this.setState(previousState => {
          return {
            timesClicked: previousState.timesClicked + 1
          }
        })
      }
    
      render() {
        return (
          <div>
            <button onClick={this.timesClicked}>{this.state.timesClicked}</button>
          </div>
        );
      }
    }

export default DigitalClicker;