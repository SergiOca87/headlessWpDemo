import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'
import styled from 'styled-components';

const StyledTeamItem = styled.div`
    .image-wrap {
        height: 30rem;
        overflow: hidden;
        width: 100%;
    }

    .gatsby-image-wrapper {
        transition: transform 2s;

        &:before {
            content: "";
            background-color: rgba(10, 51, 97, .5);
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            opacity: 0;
            transition: all 800ms;
            z-index: 1;
        }
    }

    &:hover {
        .gatsby-image-wrapper {
            transform: scale(1.1);

            &:before {
                opacity: 1;
            }
        }
    }

    .post-details {
        padding: 2rem;
        background-color: #f5f5f5;

        h3 {
            margin-bottom: 3rem;
        }

    

        a {
            text-transform: uppercase;
            color: var(--tertiary);
            text-decoration: none;
            font-weight: 600;
            font-size: 1.4rem;

            &:hover {
                color: var(--secondary);
            }
        }
    }
`;

function TeamItem({ item }) {
    return (
        <>
            <StyledTeamItem>
                {item.node.featuredImage && <div className="image-wrap"><GatsbyImage image={item.node.featuredImage.node.localFile
                    .childImageSharp.gatsbyImageData} alt={item.node.title} /></div>}
                <div className="post-details">
                    <h3>{item.node.title}</h3>
                    {item.node.jobTitle && <p>{item.node.jobTitle}</p>}
                </div>
            </StyledTeamItem>
        </>
    )
}

export default TeamItem