import React from 'react'
import { Container } from 'react-bootstrap'
import styled, { css } from 'styled-components'

const StyledSection = styled.section`
    padding: 8rem 0;

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
                <h2>{title}</h2>
                <p>{text}</p>
                {children}
            </Container>
        </StyledSection>
    )
}

export default Section