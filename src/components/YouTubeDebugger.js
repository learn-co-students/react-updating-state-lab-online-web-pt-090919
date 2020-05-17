// Code YouTubeDebugger Component Here
import React, { Component, Fragment } from 'react';

class YouTubeDebugger extends Component {
     constructor(props) {
          super(props);
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

     handleBitrateClick = () => {
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

     handleVidResClick = () => {
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
               <Fragment>
                    <button onClick={this.handleBitrateClick} className="bitrate">Change Settings</button>
                    <button onClick={this.handleVidResClick} className="resolution">Change Resolution</button>
               </Fragment>
           );
     }
}
 
export default YouTubeDebugger;