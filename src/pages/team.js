import { graphql } from 'gatsby';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';
import Section from '../components/layout/Section';
import PageHero from '../components/PageHero';
import TeamItem from '../components/team/TeamItem';

const Team = ({ data }) => {
    const posts = data.allWpTeam.edges;
    const team = data.allWpPage.edges[0].node.team;

    return (
        <>
            <Layout>
                <PageHero image={data.allWpPage.edges[0].node.featuredImage.node.localFile.childImageSharp.gatsbyImageData} title={team.pageTitle} text={team.pageSubtitle} />

                <Section>
                    <Row>
                        {
                            posts.length && posts.map((post) => (
                                <Col lg={4} md={6}>
                                    <TeamItem item={post} />
                                </Col>
                            ))
                        }
                    </Row>
                </Section>
            </Layout>
        </>
    )
}

export default Team

export const teamQuery = graphql`
{
    allWpPage(filter: {slug: {eq: "team"}}) {
        edges {
            node {
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
                team {
                    pageTitle
                    pageSubtitle
                }
            }
        }
    }
    allWpTeam {
        edges {
            node {
                id
                title
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
            }
        }
    }
 }`