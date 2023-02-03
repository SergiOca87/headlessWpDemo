import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'
import { Button } from 'react-bootstrap';
import styled from "styled-components"

const StyledProperty = styled.div`
	padding: 1rem 1rem 3rem 1rem;
	color: #000;
	background-color: #fff;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 5px 0px;

	.property-text-wrap {
		padding: 2rem 2rem 0 2rem;

		h4 {
			font-size: 1.8rem;
		}
		p {
			font-size: 1.6rem;
		}
	}

	.gatsby-image-wrapper {
		height: 40rem;

		img {
			height: 100%;
			width: 100%;object-fit: cover;
		}
	}

	button {
		opacity: 0;
		transition: opacity 300ms;
	}
`;

function Property({ property }) {
	return (
		<StyledProperty>
			<GatsbyImage
				image={
					property.featuredImage.node.localFile.childImageSharp.gatsbyImageData
				}
			/>
			<div className="property-text-wrap">
				<h3>
					{property.title}
				</h3>


			</div>
		</StyledProperty>

	)
}


export default Property