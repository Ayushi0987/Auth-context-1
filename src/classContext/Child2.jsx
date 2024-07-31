import React from 'react';

import { ThemeContext } from './context/ThemeContext';

class Child2 extends React.Component{
    render(){
        return(
            <ThemeContext.Consumer>
            {
                ({state})=>{
                    return(
                        <>
                          Child2: {state.theme}
                        </>
                    )
                }
            }
            </ThemeContext.Consumer>
            
        )
    }
}

export default Child2
