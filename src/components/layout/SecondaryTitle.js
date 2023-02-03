import React from 'react'
import styled from 'styled-components'

const StyledSecondaryTitle = styled.h2`
  font-weight: 600;
  margin-top: 2rem;
  font-size: 2.8rem;
  margin-bottom: 2rem;
  color: var(--tertiary);
  text-transform: uppercase;
  letter-spacing: 1px;
`

function SecondaryTitle({ title }) {
  return (
    <StyledSecondaryTitle>{title}</StyledSecondaryTitle>
  )
}

export default SecondaryTitle