import React, {Component} from 'react'

export default class App extends Component{
    state = {isClass: true}
    render(){
        console.log(this.props)
        console.log(this.state)
        return(
            <>
                <div>{this.props.studying}</div>
                <button 
                    onClick={()=>this.setState({isClass: !this.state.isClass})}
                >
                        Toggle
                </button>
            </>
        )
    }

  
  
}
