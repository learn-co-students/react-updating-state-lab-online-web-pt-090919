// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }

  handleBitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12 //decompose objects, returns all k-v from within obj
        // settings should be equal to all the k-v's that make up settings
        // and there should be bitrate key with the value 12.
      }
    })
  }

  handleResClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.handleBitrateClick}>Bitrate: {this.state.settings.bitrate.toString()}</button>
        <button className='resolution' onClick={this.handleResClick}>Resolution: {this.state.settings.video.resolution}</button>
      </div>
    )
  }
}