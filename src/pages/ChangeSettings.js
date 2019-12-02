import React from "react"

export default class ChangeSettings extends React.Component {
    // this state is only for controlling the form fields
    state = {
        fontSize:0,
        fontColor:""
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    
    confirmSetting = () => {
        this.props.updateSettings({
            fontSize: this.state.fontSize,
            fontColor: this.state.fontColor
        })
    }
    
    render(){
        
        return (
            <div>
                <h1>Change Settings</h1>
                
                <div>
                    <label>Color:</label>
                    <input type='text' name='fontColor' value={this.state.fontColor} onChange={this.handleChange}/>
                </div>
                
                <div>
                    <label>Size:</label>
                    <input type='text' name='fontSize' value={this.state.fontSize} onChange ={this.handleChange}/>
                 </div>  
                 <button onClick={this.confirmSetting}>Confirm</button>
            </div>
        )
    }
}