import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
// Componentsimport "bootstrap/dist/css/bootstrap.min.css";
// import Layout from '../components/Layout';
// import SEO from '../components/SEO';
import {
    Col,
    Container,
    Row,
    Tab,
    Button,
    Form,
    Nav,
    Spinner,
} from 'react-bootstrap';
import Map from '../components/properties/Map';
import MapList from '../components/properties/MapList';
import PropertyCard from '../components/properties/PropertyCard';

import { IoGridOutline, IoMapOutline } from 'react-icons/io5';
import { FaTimes } from 'react-icons/fa';
import PropertiesContext from '../context/PropertiesContext';
import Layout from '../components/layout/Layout';
import PageHero from '../components/PageHero';
import Seo from 'gatsby-plugin-wpgraphql-seo';

const StyledHeader = styled.div`
	height: 100px;
	background-color: #cecece;
	width: 100%;

	.inner {
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
`;

const StyledSecondaryHeader = styled.h2`
  font-weight: 600;
  margin-top: 2rem;
  font-size: 2.8rem;
  margin-bottom: 3rem;
  color: var(--tertiary);
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
`;

const StyledForm = styled(Form)`
	display: flex;
	align-items: center;
	margin-left: 20px;
	width: 100%;

	select,
	input {
		margin-right: 15px;
		min-width: 100px;
		max-width: 250px;
		width: 100%;
	}

    select {
        height: 3.9rem;
        font-size: 1.6rem;
    }
`;

const StyledFilters = styled.div`
	padding: 40px 0;
	display: flex;
	width: 100%;
    margin: 0 auto;
    max-width: 130rem; margin: 0 auto;

    .nav-link {
        font-size: 1.6rem;
        text-transform: uppercase;
        font-weight: 600;
        color: var(--primary);

        &.active {
            color: red;
            background-color: var(--primary) !important;
            color: #fff !important;
        }

    select {
        height: 3.9rem;
        font-size: 1.6rem;
    }
`;

const StyledFooter = styled.div`
	height: 100px;
	background-color: #cecece;
	width: 100%;
`;

const Properties = ({ data }) => {
    const propertiesPage = data.allWpPage.edges[0].node;
    //Map and List States
    const [childClicked, setChildClicked] = useState(null);

    // Filters
    const [selectedOffering, setSelectedOffering] = useState('All');
    const [selectedType, setSelectedType] = useState('All');
    const [activeFilters, setActiveFilters] = useState(true);
    // const [search, setSearch] = useState('');

    const properties = data?.allWpProperty.edges;

    //On Load, set all properties to be filteredProperties
    // useEffect(() => {
    // 	if (properties) {
    // 		setFilteredProperties(properties);
    // 	}
    // }, []);

    const { loading } = useContext(PropertiesContext);

    const { filteredProperties, setFilteredProperties } =
        useContext(PropertiesContext);

    //When offering or type changes, filter properties
    //TODO: This is not a proper use of useEffect, could it just be a regular function?
    useEffect(() => {
        let results = [];

        if (selectedOffering === 'All' && selectedType === 'All') {
            setFilteredProperties(properties);
            setActiveFilters(false);
        } else if (selectedOffering !== 'All' && selectedType === 'All') {
            setActiveFilters(true);
            results = properties.filter(
                (property) =>
                    property.node.offeringTypes.nodes[0].name ===
                    selectedOffering
            );

            setFilteredProperties([...results]);
        } else if (selectedOffering === 'All' && selectedType !== 'All') {
            setActiveFilters(true);
            results = properties.filter((property) =>
                property.node.propertyTypes.nodes.some(
                    (propertyType) => propertyType.name === selectedType
                )
            );

            setFilteredProperties([...results]);
        } else {
            setActiveFilters(true);
            results = properties.filter(
                (property) =>
                    property.node.offeringTypes.nodes[0].name ===
                    selectedOffering &&
                    property.node.propertyTypes.nodes.some(
                        (propertyType) => propertyType.name === selectedType
                    )
            );
            setFilteredProperties([...results]);
        }
    }, [selectedOffering, selectedType]);

    const resetFilters = () => {
        setSelectedOffering('All');
        setSelectedType('All');
        setActiveFilters(false);
    };

    const handleOfferingChange = (value) => {
        if (value === 'All') {
            setSelectedOffering('All');
        } else {
            setSelectedOffering(value);
        }
    };

    const handleTypeChange = (value) => {
        if (value === 'All') {
            setSelectedType('All');
        } else {
            setSelectedType(value);
        }
    };

    // TODO: Filters are its own component
    const offeringFilter = data.allWpOfferingType.edges;
    const propertyTypeFilter = data.allWpPropertyType.edges;

    return (
        <>
            <Layout>
                <Seo post={data.allWpPage.edges[0].node} />
                <PageHero image={propertiesPage.featuredImage.node.localFile.childImageSharp.gatsbyImageData} title={propertiesPage.properties.pageTitle} text={propertiesPage.properties.pageSubtitle} />
                <main>
                    <Container fluid>
                        <Tab.Container
                            id="left-tabs-example"
                            defaultActiveKey="grid"
                        >
                            <StyledFilters>
                                <Nav
                                    variant="tabs"
                                    defaultActiveKey="grid"
                                    css={css`
									flex-shrink: 0;
								`}
                                >
                                    <Nav.Item>
                                        <Nav.Link eventKey="grid">
                                            <IoGridOutline /> Grid
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="map">
                                            <IoMapOutline /> Map
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <StyledForm>
                                    {offeringFilter.length && (
                                        <Form.Control
                                            as="select"
                                            onChange={(e) =>
                                                handleOfferingChange(e.target.value)
                                            }
                                            value={selectedOffering}
                                        >
                                            <option value="All">Offering</option>
                                            {offeringFilter.map((offering) => {
                                                return (
                                                    <option
                                                        value={offering.node.name}
                                                    >
                                                        {offering.node.name}
                                                    </option>
                                                );
                                            })}
                                        </Form.Control>
                                    )}

                                    {propertyTypeFilter.length && (
                                        <Form.Control
                                            as="select"
                                            onChange={(e) =>
                                                handleTypeChange(e.target.value)
                                            }
                                            value={selectedType}
                                        >
                                            <option value="All">Type</option>
                                            {propertyTypeFilter.map((type) => {
                                                return (
                                                    <option value={type.name}>
                                                        {type.node.name}
                                                    </option>
                                                );
                                            })}
                                        </Form.Control>
                                    )}

                                    {activeFilters !== false ? (
                                        <Button
                                            variant="outline-secondary btn-small"
                                            onClick={() => resetFilters()}
                                        >
                                            <FaTimes /> Reset Filters
                                        </Button>
                                    ) : (
                                        ''
                                    )}

                                    {/* <Form.Control
									type="text"
									placeholder="Search By Name"
									onChange={(e) => setSearch(e.target.value)}
								/> */}
                                </StyledForm>
                            </StyledFilters>

                            {loading === false ? (
                                <Tab.Content>
                                    <Tab.Pane eventKey="grid">
                                        <Container
                                            className="mb-5"
                                            css={css`
											min-height: 500px;
										`}
                                        >
                                            <StyledSecondaryHeader className="mb-5 mt-3 text-center">
                                                {filteredProperties?.length}{' '}
                                                {filteredProperties?.length === 1
                                                    ? 'Property found'
                                                    : 'properties found'}{' '}
                                            </StyledSecondaryHeader>

                                            <Row>
                                                {filteredProperties?.map(
                                                    (property) => {
                                                        return (
                                                            <Col lg={4} md={6}>
                                                                <PropertyCard
                                                                    property={
                                                                        property
                                                                    }
                                                                />
                                                            </Col>
                                                        );
                                                    }
                                                )}
                                            </Row>

                                        </Container>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="map">
                                        <Container fluid>
                                            <div
                                                css={css`
												max-height: 600px;
												overflow: hidden;
											`}
                                            >
                                                <Row>
                                                    <Col lg={7}>
                                                        <Map
                                                            properties={
                                                                filteredProperties
                                                            }
                                                            childClicked={
                                                                childClicked
                                                            }
                                                            setChildClicked={
                                                                setChildClicked
                                                            }
                                                        />
                                                    </Col>
                                                    <Col lg={5}>
                                                        <MapList
                                                            properties={
                                                                filteredProperties
                                                            }
                                                            childClicked={
                                                                childClicked
                                                            }
                                                        />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Container>
                                    </Tab.Pane>
                                </Tab.Content>
                            ) : (
                                <div
                                    className="text-center mt-4 mb-5"
                                    css={css`
									padding-bottom: 300px;
								`}
                                >
                                    <Spinner animation="border" role="status">
                                        <span className="visually-hidden">
                                            Loading...
                                        </span>
                                    </Spinner>
                                </div>
                            )}
                        </Tab.Container>
                    </Container>
                </main>
            </Layout>
            <StyledFooter />
        </>
    );
};

export const indexQuery = graphql`
	{
        allWpPage(filter: {slug: {eq: "properties-2"}}) {
            edges {
                node {
                    properties {
                        pageTitle
                        pageSubtitle
                    }
                    featuredImage {
                        node {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData(
                                        layout: FULL_WIDTH, 
                                    )
                                }
                            }
                        }
                    }
                    seo {
                        title
                        metaDesc
                        focuskw
                        metaKeywords
                        metaRobotsNoindex
                        metaRobotsNofollow
                        opengraphTitle
                        opengraphDescription
                        opengraphImage {
                            altText
                            sourceUrl
                            srcSet
                        }
                        twitterTitle
                        twitterDescription
                        twitterImage {
                            altText
                            sourceUrl
                            srcSet
                        }
                        canonical
                        cornerstone
                        schema {
                            articleType
                            pageType
                            raw
                        }
                    }
                }       
            }
        }
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

export default Properties;
