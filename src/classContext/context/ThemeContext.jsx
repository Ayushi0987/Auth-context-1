import React from "react";
import { createContext, Component } from "react";

const ThemeContext = createContext();

class ThemeProvider extends Component{
    state = {
        theme: 'light',
        toggleTheme: () => {
            this.setState((prevState) => {
                return {theme: prevState.theme === 'light' ? 'dark' : 'light'}
            })
        }
    }
    render(){
        return(
            <ThemeContext.Provider value={{state: this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export {ThemeContext, ThemeProvider}