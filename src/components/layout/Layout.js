import React from "react"
import { createGlobalStyle } from "styled-components"
import "normalize.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyle = createGlobalStyle`

    :root {
       --primary: rgba(0, 28,60);
    }
  
    html {
        font-size: 62.5%;

    }

    body {
        font-family: 'Poppins', sans-serif;
    }

    h1,h2,h3,h4,h5,h6 {
        font-weight: 600;
    }

    a {
        font-weight: 600;
    }

    h1 {
        font-size: 5rem;
    }

    h2 {
        font-size: 3rem;
    }

    h1,h2,h3,h4,h5,h6, p {
        margin: 0;
    }

    p {
        font-size: 1.8rem;
    }

    .white {
        color: #fff;
    }
  
`
export default function Layout({ children }) {
    return (
        <React.Fragment>
            <GlobalStyle />
            {children}
        </React.Fragment>
    )
}