import React from 'react'

import { ThemeContext } from './context/ThemeContext'


export default class Child1 extends React.Component{
        render(){
            return(
                <ThemeContext.Consumer>
                {
                    ({state})=>{
                        return(
                            <>
                                {state.theme}
                                <button onClick={state.toggleTheme}>Toggle Theme</button>
                            </>
                        )
                    }
                }
                </ThemeContext.Consumer>
            )
        }
}


