import React from 'react'
import styled from 'styled-components'

const StyledSecondaryTitle = styled.h2`
  font-weight: 600;
  margin-top: 2rem;
  font-size: 2.8rem;
  margin-bottom: 3rem;
  color: ${props => props.color || "var(--tertiary)"};
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -1.8rem;
    width: 10rem;
    height: 3px;
    background-color:  ${props => props.color || "var(--primary)"};
    left: 0;
  }
`

function SecondaryTitle({ title, color }) {
  return (
    <StyledSecondaryTitle color={color}>{title}</StyledSecondaryTitle>
  )
}

export default SecondaryTitle