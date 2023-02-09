import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import { MdLocationOn } from 'react-icons/md';
import PropertiesContext from '../../context/PropertiesContext';

const StyledMapMarker = styled(MdLocationOn)`
	height: 30px;
	width: 30px;
	transition: all 300ms;
	transform: translateY(-5px);
	transform-origin: bottom;

	&.isSelected {
		transform: translateY(-5px) scale(1.2);

		fill: blue;
	}
`;

export default function MapMarker({ property, index }) {
	// const markerHover = (i) => {
	// 	console.log('marker hover', i);
	// 	// setChildClicked(i);
	// };
	const { selectedProperty, setSelectedProperty } =
		useContext(PropertiesContext);

	const handleMouseOver = (index) => {
		setSelectedProperty(index);

		console.log('hover', index, selectedProperty);
	};

	return (
		<StyledMapMarker
			// TODO: This key NEEDS to be the i

			onMouseOver={() => handleMouseOver(index)}
			className={selectedProperty === index ? 'isSelected' : ''}
		>
			<MdLocationOn
				style={{
					height: '30px',
					width: '30px',
					position: 'relative',
					zIndex: '1000',
					cursor: 'pointer',
					marginTop: '-10px',
				}}
			// onMouseOver={(e) => showCard(e)}
			/>
		</StyledMapMarker>
	);
}
