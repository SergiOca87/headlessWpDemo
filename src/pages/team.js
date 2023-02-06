import { graphql } from 'gatsby';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import PageHeader from '../components/layout/PageHeader';
import Section from '../components/layout/Section';
import TeamItem from '../components/team/TeamItem';

const Team = ({ data }) => {
    const posts = data.allWpTeam.edges;
    const team = data.allWpPage.edges[0].node.team;

    return (
        <>
            <PageHeader title={team.pageTitle} subtitle={team.pageSubtitle} />
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
        </>
    )
}

export default Team

export const teamQuery = graphql`
{
    allWpPage(filter: {slug: {eq: "team"}}) {
        edges {
            node {
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