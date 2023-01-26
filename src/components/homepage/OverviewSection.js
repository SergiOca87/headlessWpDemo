import React from 'react'
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { BsHouseDoor } from "react-icons/bs";
import { RiLandscapeLine } from "react-icons/ri";
import { MdOutlineMedicalServices } from "react-icons/md";
import styled from 'styled-components';
import Section from '../layout/Section';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'gatsby';
import { Parallax } from 'react-scroll-parallax';

const StyledOverviewIcons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 45rem;
    margin-left: auto;

    h3 {
        margin-bottom: 1.5rem;
    }

	.overview-icon {
        width: 20rem; 
        height: 20rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        margin-bottom: 3rem;
        position: relative;

        &:after {
            content: "";
            background-color: var(--secondary);
            width: 0;
            height: 5px;
            position: absolute;
            bottom: 0;
            left: 0;
            transition: all 300ms;
        }

        svg {
            font-size: 6rem;
            opacity: .5;
            transition: all 300ms;

            path {
                transition: all 300ms;
            }
        }

        &:hover {

            &:after {
                width: 100%;
            }

            svg {
                opacity: 1;
                fill: var(--secondary);

                path {

                    stroke: var(--secondary);
                }
                
            }
        }
    }
`;

const StyledOverviewSection = styled.div`
    padding: 6rem 0;
    min-height: 50rem;

    .content-wrap {
        height: 100%;
        min-height: 25rem;
        display: flex; 
        flex-direction: column; 
        justify-content: space-between;
        padding-bottom: 4rem;

    }
`

function OverviewSection({ title, text }) {
    return (
        <StyledOverviewSection>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="content-wrap">
                            <div>
                                <h2>{title}</h2>
                                <p>{text}</p>
                            </div>
                            <Link to="/about" >
                                <Button>About Us</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <StyledOverviewIcons>
                            <Parallax translateY={[-10, 20]}>
                                <div className="overview-icon"><h3>Office</h3>
                                    <HiOutlineBuildingOffice2 />
                                </div>
                                <div className="overview-icon"><h3>Multifamily</h3>
                                    <BsHouseDoor />
                                </div>
                            </Parallax>
                            <Parallax translateY={[10, -20]}>
                                <div className="overview-icon"><h3>Land</h3>
                                    <RiLandscapeLine />
                                </div>
                                <div className="overview-icon"><h3>Medical</h3>
                                    <MdOutlineMedicalServices />
                                </div>
                            </Parallax>
                        </StyledOverviewIcons>

                    </Col>
                </Row>
            </Container>
        </StyledOverviewSection>
    )
}

export default OverviewSection