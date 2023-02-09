import React, { useState, useEffect } from 'react';

//TODO: Should we use context for all of the filtered properties?
//TODO: (Using context for filtered properties enables cross-page filtering);

const PropertiesContext = React.createContext();

export const PropertiesProvider = ({ data, children }) => {
	const properties = data?.allWpProperty.edges;

	const [selectedProperty, setSelectedProperty] = useState('');
	const [filteredProperties, setFilteredProperties] = useState([]);
	const [loading, setLoading] = useState(true);

	//Fill up the filteredProperties state
	useEffect(() => {
		if (properties) {
			setFilteredProperties(properties);
		}
	}, []);

	//Set loading to false when filteredProperties change
	useEffect(() => {
		setLoading(false);
	}, [filteredProperties]);

	return (
		<PropertiesContext.Provider
			value={{
				selectedProperty,
				setSelectedProperty,
				filteredProperties,
				setFilteredProperties,
				loading,
				setLoading,
			}}
		>
			{children}
		</PropertiesContext.Provider>
	);
};

export default PropertiesContext;

const indexQuery = graphql`
	{
		allWpProperty {
			edges {
				node {
					offeringTypes {
						nodes {
							name
						}
					}
					id
					title
					status
					propertyTypes {
						nodes {
							name
						}
					}
					property {
						locationTabGroup {
							address
							coordinates {
								latitude
								longitude
							}
						}
					}
					featuredImage {
						node {
							localFile {
								childImageSharp {
									gatsbyImageData(
										layout: CONSTRAINED
										width: 800
										placeholder: BLURRED
										quality: 100
									)
								}
							}
						}
					}
				}
			}
		}
		allWpPropertyType {
			edges {
				node {
					name
				}
			}
		}
		allWpOfferingType {
			edges {
				node {
					name
				}
			}
		}
	}
`;