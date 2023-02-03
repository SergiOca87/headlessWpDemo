import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import Section from './Section'

const StyledTitles = styled.div`
    text-align: center;
`

function PageHeader({ title, subtitle }) {
    return (
        <Section bg={true}>
            <Container>
                <StyledTitles>
                    <h1>{title}</h1>
                    {subtitle && <p>{subtitle}</p>}
                </StyledTitles>
            </Container>
        </Section>
    )
}

export default PageHeader