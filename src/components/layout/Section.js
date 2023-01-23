import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

const StyledSection = styled.section`
    padding: 6rem 0;

    h2 {
        margin-bottom: 1.5rem;
    }
`

function Section({ title, text, children }) {
    return (
        <StyledSection>
            <Container>
                <h2>{title}</h2>
                <p>{text}</p>
                {children}
            </Container>
        </StyledSection>
    )
}

export default Section