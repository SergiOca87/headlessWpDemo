import React, { useEffect, createRef, useState, useContext } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import PropertiesContext from '../../context/PropertiesContext';
import SmallPropertyCard from './SmallPropertyCard';

const StyledMapList = styled.div`
	max-height: 600px;
	overflow-y: scroll;

	//Scrollbars
	&::-webkit-scrollbar {
		width: 5px;
	}

	&::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px #d9d9d9;
		border-radius: 15px;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 15px;
		background: var(--primary);
	}
`;

//TODO scroll into view of selectedProperty here?

export default function MapList({ properties, childClicked }) {
	const [elRefs, setElRefs] = useState([]);

	const { selectedProperty, setSelectedProperty } =
		useContext(PropertiesContext);

	const handleMouseOver = (i) => {
		setSelectedProperty(i);
	};

	return (
		<StyledMapList>
			{properties.map((property, i) => {
				return (
					<div key={i} onMouseOver={() => handleMouseOver(i)}>
						<SmallPropertyCard
							key={i}
							property={property}
							refProp={elRefs[i]}
							selected={Number(childClicked) === i}
							index={i}
						/>
					</div>
				);
			})}
		</StyledMapList>
	);
}
