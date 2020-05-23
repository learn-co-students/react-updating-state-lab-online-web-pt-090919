import React from 'react'; 
export default class DigitalClicker extends React.Component{
    constructor(props){
        super(props)
        this.state = { timesClicked: 0 }
    } 
    updateState = () => {
        this.setState((previousState) =>{
            return { timesClicked: previousState.timesClicked + 1 }
        } )
    }
    render(){
        return (<div>
            <button onClick={this.updateState}>{this.state.timesClicked}</button>
        </div>)
    }
}