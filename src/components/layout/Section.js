import React from 'react'
import { Container } from 'react-bootstrap'
import styled, { css } from 'styled-components'
import SecondaryTitle from './SecondaryTitle'

const StyledSection = styled.section`
    padding: 8rem 0;
    overflow: hidden;
    position: relative;

    .titles-wrap {
        max-width: 75rem;
       
        p {
            margin-bottom: 5rem;
        }

        &.text-center {
            text-align: center;
            margin: 0 auto;

            h2 {

                &:after {
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
        }
    }
`

function Section({ title, text, children, background = false, centered = false }) {
    return (
        <StyledSection css={css`${background
            ? `background-color: ${background}`
            : ""}
        `} >
            <Container>
                <div className={`titles-wrap ${centered && 'text-center'}`}>
                    {title && <SecondaryTitle title={title} />}
                    {text && <p>{text}</p>}
                </div>
                {children}
            </Container>
        </StyledSection >
    )
}

export default Section