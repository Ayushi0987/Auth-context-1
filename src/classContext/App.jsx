import React from 'react'
import Child1 from './Child1';
import Child2 from './Child2'
import { ThemeProvider } from './context/ThemeContext';

export default class App extends React.Component{
    render(){
        return (
            <ThemeProvider>
                <Child1 />
                <Child2 />
            </ThemeProvider>
          )
    }
}
