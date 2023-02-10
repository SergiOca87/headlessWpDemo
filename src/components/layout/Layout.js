import React from "react"
import { createGlobalStyle } from "styled-components"
import "normalize.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import PropertiesContext from '../../context/PropertiesContext';

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

    .btn {
        text-transform: uppercase;
        padding: 1.5rem 2.5rem;
        font-size: 1.5rem;
        border-radius: 0;
        letter-spacing: .5px;

        &-transparent {
            background-color: transparent;
            border: 1px solid #fff;
            color: #fff;
        
            &:hover {
            background-color: #fff;
            color: var(--primary);
            }
        }
        &-full-transparent {
            background-color: transparent;
            border: 1px solid transparent;
        
            &:hover, &.active {
            border: 1px solid var(--primary);
            }
        }
        &-transparent-primary {
            background-color: transparent;
            border: 1px solid var(--primary);
            color: var(--text);
        
            &:hover {
            background-color: var(--primary);
            color: #fff;
            }
        }

        &-full-primary {
            background-color: var(--primary);
            border: 1px solid var(--primary);
            color: #fff;

            &:hover {
                border: 1px solid var(--primary);
                background-color: transparent;
            }
        }

        &-small {
            padding: 1rem 2rem;
            font-size: 1.3rem;
        }

        &-outline-primary {
            border: 1px solid var(--primary);
            color: var(--primary);

            &:hover {
                background-color: var(--primary);
                color: #fff;
                }
        }
    
        &-sm {
            padding: 1rem 2.5rem;
        }
    }

    .container {
        position: relative;
    }

    .offcanvas-body {
        background-color: var(--primary);
        padding-top: 5rem !important;
 
        a {
            text-transform: uppercase;
            padding: .5rem 2.5rem;
            font-size: 1.5rem;
            border-radius: 0;
            letter-spacing: .5px;
            color: #fff;
            text-decoration: none;
        }
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