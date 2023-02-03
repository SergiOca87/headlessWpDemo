import React from 'react'
import { Container } from 'react-bootstrap'
import styled, { css } from 'styled-components'
import SecondaryTitle from './SecondaryTitle'

const StyledSection = styled.section`
    padding: 8rem 0;
    overflow: hidden;
    position: relative;

    h2 {
        margin-bottom: 1.5rem;
    }
`

function Section({ title, text, children, bg = false }) {
    return (
        <StyledSection css={css`${bg
            ? "background-color: var(--tertiary)"
            : ""}
        `} >
            <Container>
                <SecondaryTitle title={title} />
                <p>{text}</p>
                {children}
            </Container>
        </StyledSection>
    )
}

export default Section