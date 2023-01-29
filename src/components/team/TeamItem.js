import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'
import styled from 'styled-components';

const StyledTeamItem = styled.div``;

function TeamItem({ item }) {
    return (
        <>
            <StyledTeamItem>
                {item.node.featuredImage && <GatsbyImage />}
                <h3>{item.node.title}</h3>
                {item.node.jobTitle && <p>{item.node.jobTitle}</p>}
            </StyledTeamItem>
        </>
    )
}

export default TeamItem