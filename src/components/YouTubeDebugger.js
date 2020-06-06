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
        <button className='bitrate' onClick={this.handleBitrate}>Bitrate {this.state.settings}</button>
        <button className='resolution' onClick={this.handleResolution}> Resolution {this.state.settings.video}</button>
      </div>
    );
  }

}

export default YouTubeDebugger;
