import { graphql } from 'gatsby';
import React from 'react'
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
                {posts.map((post) => (
                    <TeamItem item={post} />
                ))}
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
            }
        }
    }
 }`