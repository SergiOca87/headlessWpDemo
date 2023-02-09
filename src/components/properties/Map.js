import React, { useState, useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker';
import PropertiesContext from '../../context/PropertiesContext';
import MapStyles from './MapStyles';

export default function Map({ properties, childClicked, setChildClicked }) {
	const coordinates = { lat: 35.850033, lng: -94.6500523 };

	const [coords, setCoords] = useState({});
	const [bounds, setBounds] = useState(null);

	const showCard = () => {
		//TODO: Can this open a Card tooltip?
		//TODO: Google Maps has onChildcLick, probably has an onCHildMouseOver
	};

	const { selectedProperty } = useContext(PropertiesContext);

	// const handleChildClicked = (child) => {
	// 	setChildClicked(null);
	// 	setChildClicked(child);
	// };

	return (
		<div style={{ height: '100vh', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: `${process.env.GATSBY_GOOGLE_MAPS_API_KEY}`,
				}}
				defaultCenter={coordinates}
				center={coordinates}
				defaultZoom={4}
				margin={[50, 50, 50, 50]}
				options={{
					disableDefaultUI: true,
					zoomControl: true,
					styles: MapStyles,
				}}
				hoverDistance={10}
				onChange={(e) => {
					setCoords({ lat: e.center.lat, lng: e.center.lng });
					setBounds({
						ne: e.marginBounds.ne,
						sw: e.marginBounds.sw,
					});
				}}
			// onChildClick={(child) => handleChildClicked(child)}
			>
				{properties?.map((property, i) => (
					<MapMarker
						lat={Number(
							property?.node.property?.locationTabGroup
								.coordinates.latitude
						)}
						lng={Number(
							property?.node.property?.locationTabGroup
								.coordinates.longitude
						)}
						key={i}
						property={property}
						index={i}
					/>
				))}
			</GoogleMapReact>
		</div>
	);
}
