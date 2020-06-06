// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {

  constructor(props){
    super(props)
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBitrate = () => {
    this.setState(() => {
      return {
              errors: [],
              user: null,
              settings: {
                   ...this.state.settings,
                   bitrate: 12
              }
          };
          }, () => console.log(this.state.settings));
    }

  handleResolution = () => {
          this.setState(() => {
               return {
                    errors: [],
                    user: null,
                    settings: {
                         ...this.state.settings,
                         video: {
                              resolution: "720p"
                         }
                    }
               }
          }, () => console.log(this.state.settings.video))
     }


  render() {
    return (
      <div>
        <button class='bitrate' onClick={this.handleBitrate}>Bitrate</button>
        <button class='resolution' onClick={this.handleResolution}>Resolution</button>
      </div>
    );
  }

}

export default YouTubeDebugger;
