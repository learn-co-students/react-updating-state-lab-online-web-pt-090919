// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super()
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
    this.setState(previousState => {
  return { previousState.settings.bitrate = 12)}
    }
    )
  }
  
  
  handleResolution = () => {
    this.setState({
      resolution: {...this.state, resolution: '720p'}
    })
  }
  
  render() {
    return (
      <div>
      <button className="bitrate" onClick={this.handleBitrate}>Change bitrate to 12</button>
      <button className="resolution" onClick={this.handleResolution}>Change resolution</button>
      </div>
    )
  }
}
