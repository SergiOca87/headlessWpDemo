import React from "react"
import { createGlobalStyle } from "styled-components"
import "normalize.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";

const GlobalStyle = createGlobalStyle`

    :root {
       --primary: rgba(0, 28,60);
       --secondary: rgb(185 156 94);
       --tertiary: rgb(10 51 97);
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

    a {
        text-decoration: none;
        transition: color 300ms;
    }

    .container {
        position: relative;
    }
  
`
export default function Layout({ children, homepage = false }) {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Header homepage={homepage} />
            {children}
        </React.Fragment>
    )
}