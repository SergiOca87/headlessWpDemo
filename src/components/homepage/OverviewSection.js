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
import SecondaryTitle from '../layout/SecondaryTitle';

const StyledOverviewIcons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    max-width: 60rem;
    margin-left: auto;

    h3 {
        font-weight: 600;
        margin-top: 2rem;
        font-size: 1.6rem;
        color: var(--tertiary);
        text-transform: uppercase;
        letter-spacing: 1px;
    }

	.overview-icon {
        width: 100%;
        height: 20rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        position: relative;
        margin-bottom: 3rem;
     

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
            opacity: .3;
            transition: all 300ms;

            // path {
            //     transition: all 300ms;
            // }
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
                                <SecondaryTitle title={title} />
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
                                <div className="overview-icon">
                                    <HiOutlineBuildingOffice2 />
                                    <h3>Office</h3>
                                </div>
                                <div className="overview-icon">
                                    <BsHouseDoor />
                                    <h3>Multifamily</h3>
                                </div>
                            </Parallax>
                            <Parallax translateY={[10, -20]}>
                                <div className="overview-icon">
                                    <RiLandscapeLine />
                                    <h3>Land</h3>
                                </div>
                                <div className="overview-icon">
                                    <MdOutlineMedicalServices />
                                    <h3>Medical</h3>
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