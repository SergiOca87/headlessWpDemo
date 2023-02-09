import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { css } from 'styled-components';

export default function PropertyCard({ property }) {
	const propertyOffering = property.node.offeringTypes.nodes[0].name;
	const propertyTypes = property.node.propertyTypes.nodes;
	const propertyImage = getImage(property.node.featuredImage.node.localFile);

	console.log(property);
	return (
		<Card
			css={css`
				overflow: hidden;
				margin-bottom: 1.5rem;

				img {
					transition: all 1s;
				}

				&:hover {
					.gatsby-image-wrapper {
						transform: scale(1.05);
					}
				}
			`}
		>
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
				<Card.Title className="mb-3">{property.node.title}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">
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

				<Card.Text>Text Placeholder</Card.Text>
				<Button variant="outline-secondary">View Details</Button>
			</Card.Body>
		</Card>
	);
}
