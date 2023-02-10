import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled, { css } from 'styled-components';
import PostItem from '../PostItem';
import Property from '../Property';

const StyledPropertyCard = styled(Card)`
	overflow: hidden;
	margin-bottom: 1.5rem;

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


	img {
		transition: all 1s;
	}

	&:hover {
		.gatsby-image-wrapper {
			transform: scale(1.1);

			&:before {
				opacity: 1;
			}
		}
	}

	.h5 {
		font-size: 2rem;
		text-transform: uppercase;
		margin-bottom: 2rem;
		font-weight: 600;
	}

	.h6 {
		font-size: 1.6rem;
	}

`

export default function PropertyCard({ property }) {
	const propertyOffering = property.node.offeringTypes.nodes[0].name;
	const propertyTypes = property.node.propertyTypes.nodes;
	const propertyImage = getImage(property.node.featuredImage.node.localFile);

	console.log(property);
	return (

		<>
			<StyledPropertyCard>
				<div
					css={css`
					max-height: 275px;
					overflow: hidden;
				`}
				>
					<GatsbyImage
						image={propertyImage}
						alt={property.node.title}
						objectFit="cover"
						css={css`
						transition: all 1s;
					`}
					/>
				</div>
				<Card.Body>
					<Card.Title className="mb-4">{property.node.title}</Card.Title>
					<Card.Subtitle className="mb-3 text-muted">
						For {propertyOffering}
					</Card.Subtitle>
					{propertyTypes &&
						propertyTypes.map((type) => {
							return (
								<Card.Subtitle className="mb-2 text-muted">
									{type.name}
								</Card.Subtitle>
							);
						})}
					{/* <Button variant="outline-primary btn-small mt-4">View Details</Button> */}
				</Card.Body>
			</StyledPropertyCard>
		</>




	);
}
