import React, { useState } from 'react'
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { render } from 'react-dom';

const StyledNav = styled.nav`
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .links-wrap {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    a {
        text-decoration: none;
        color: #000;
        text-transform: uppercase;
        font-size: 1.6rem;
    

        &:hover {
            color: var(--primary);
        }
    }
`

const StyledHomepageNav = styled.nav`
padding: 2rem 0;
display: flex;
justify-content: space-between;
align-items: center;
position: absolute;
top: 0;
left: 0;
width: 100%;
z-index: 10;

.links-wrap {
    display: flex;
    align-items: center;
    gap: 2rem;
}

a {
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.6rem;

    &:hover {
        color: var(--primary);
    }
}
`

function Header({ homepage = false }) {

    return (
        <Navbar key={'md'} bg="light" expand={'md'}>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Container>
                {homepage ?
                    <StyledHomepageNav>
                        <div>
                            <Link to={'/'}>
                                <StaticImage
                                    src="../../assets/images/logo.svg"
                                    alt=""
                                    loading="eager"
                                    layout="fixed"
                                    placeholder="none"
                                />
                            </Link>
                        </div>
                        <div className="links-wrap">
                            <Link to={'/team'} activeStyle={{ color: "var(--primary)" }}>Team</Link>
                            <Link to={'/properties'} activeStyle={{ color: "var(--primary)" }}>Properties</Link>
                        </div>
                    </StyledHomepageNav>
                    :
                    <StyledNav>
                        <div>
                            <Link to={'/'}>
                                <StaticImage
                                    src="../../assets/images/logo.svg"
                                    alt=""
                                    loading="eager"
                                    layout="fixed"
                                    placeholder="none"
                                />
                            </Link>
                        </div>
                        <div className="links-wrap">
                            <Link to={'/team'} activeStyle={{ color: "var(--primary)" }}>Team</Link>
                            <Link to={'/properties'} activeStyle={{ color: "var(--primary)" }}>Properties</Link>
                        </div>
                    </StyledNav>}

                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-md`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                            Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Link to={'/team'} activeStyle={{ color: "var(--primary)" }}>Team</Link>
                            <Link to={'/properties'} activeStyle={{ color: "var(--primary)" }}>Properties</Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default Header