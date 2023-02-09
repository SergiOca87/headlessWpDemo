import React, { useEffect, useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled, { css } from 'styled-components';
import PropertiesContext from '../../context/PropertiesContext';

const StyledCard = styled(Card)`
	display: flex;
	overflow: hidden;
	flex-direction: row !important;

	.gatsby-image-wrapper {
		max-width: 250px;
	}

	&.isSelected {
		.card-body {
			background-color: #a3c7d1;
		}
	}
`;

export default function SmallPropertyCard({ property, selected, index }) {
	//TODO: Scroll into view using selectedProperty context index
	// useEffect(() => {
	// 	if (selected)
	// 		refProp?.current?.scrollIntoView({
	// 			behavior: 'smooth',
	// 			block: 'start',
	// 		});
	// }, [selected]);
	const { selectedProperty, setSelectedProperty } =
		useContext(PropertiesContext);

	const propertyOffering = property.node.offeringTypes.nodes[0].name;
	const propertyTypes = property.node.propertyTypes.nodes;
	const propertyImage = getImage(property.node.featuredImage.node.localFile);

	return (
		<div>
			<StyledCard
				className={selectedProperty === index ? 'isSelected' : ''}
			>
				<GatsbyImage
					image={propertyImage}
					alt={property.node.title}
					objectFit="cover"
				/>
				<Card.Body>
					<Card.Title className="mb-3">
						{property.node.title}
					</Card.Title>
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
					<Button variant="outline-secondary" size="sm">
						View Details
					</Button>
				</Card.Body>
			</StyledCard>
		</div>
	);
}
