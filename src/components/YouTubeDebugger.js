import React, { Component } from 'react';
export default class YouTubeDebugger extends Component{ 
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

    changeBit = () =>{  
       
        this.setState((previousState) => { 
             
             return Object.assign({}, ...previousState.settings.bitrate = 12)}
             
             ) 
            
            }
    resolve = () =>{
        this.setState((previousState) =>{
            return Object.assign({}, ...{ ...previousState.settings.video.resolution = '720p' }) } 
            )
    } 

    render(){ 
        console.log(this.state)
    return (<div>
        <button className='bitrate' onClick={this.changeBit}>{this.state.settings.bitrate}</button> 
        <button className='resolution' onClick={this.resolve} >{this.state.settings.video.resolution}</button>
        </div>)
    }
}