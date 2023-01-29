import { graphql } from 'gatsby';
import React from 'react'
import TeamItem from '../components/team/TeamItem';

const Team = ({ data }) => {
    const posts = data.allWpTeam.edges;

    return (
        posts.map((post) => (
            <TeamItem item={post} />
        ))
    )
}

export default Team

export const teamQuery = graphql`
{
    allWpTeam {
        edges {
            node {
                id
                title
                
            }
        }
    }
 }`