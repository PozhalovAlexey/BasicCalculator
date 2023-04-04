import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle, ThemeProvider} from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  button:focus{
    text-decoration: none;
    outline: 0 none;
  }
  
  button:active{
    transform: translateZ(6px);
  }
`

const theme = {
    colors: {
        primary: 'black',
        secondary: 'blue'
    }
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Global/>
        <App/>
    </ThemeProvider>,
    document.getElementById('root')
)

