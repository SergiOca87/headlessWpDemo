import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

const StyledPostItem = styled.div`

`

function NewsGrid({ posts }) {
    return (
        <Row>
            {
                posts.length && posts.map((post) => (
                    <Col lg={4} md={6}>
                        <StyledPostItem id={post.node.title}>
                            {console.log(post)}
                            <GatsbyImage image={post.node.featuredImage.node.localFile
                                .childImageSharp.gatsbyImageData} alt={post.node.title} />
                            <h4>{post.node.title}</h4>
                        </StyledPostItem>
                    </Col>
                ))
            }
        </Row>
    )
}

export default NewsGrid