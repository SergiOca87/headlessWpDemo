import * as React from "react"
import styled, { css } from "styled-components"
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Parallax } from "react-scroll-parallax";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import PropertiesSlider from "../components/Slider";
import Section from "../components/layout/Section";
import Layout from "../components/layout/Layout";
import OverviewSection from "../components/homepage/OverviewSection";
import NewsGrid from "../components/NewsGrid";



const StyledHero = styled.section`
	height: 60rem;
	position: relative;
	display: flex;
	align-items: flex-end;

	&:before {
		content: "";
		background-color: rgba(0, 28,60, .8);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 5;
	}

	.content {
		position: relative;
		margin-bottom: 8rem;
		z-index: 10;

		h1, p {
			color: #fff;

		}
	}

	.gatsby-image-wrapper {
		position: absolute;
		top: 0, left: 0;
		width: 100%;
		height: 100%;

	}
`

const StyledOverviewImages = styled.div`
	position: relative;

	.gatsby-image-wrapper {
		width: 35rem;
		height: 30rem;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
		background-color: #fff;
		padding: 3px;
		img {
			border-radius: 5px;
			padding: 5px;
	
		}
	}
`;

const StyledOverviewTextWrap = styled.div`
	height: 100%;


	.inner {
		border: 1px solid #fff;
		padding: 4rem;
		height: 100%;
		width: 100%;
		max-width: 55rem;
		margin-left: auto;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		h2, p {
			color: #fff;
		}
	}
`;



//TODO: https://en.99designs.es/blog/creative-inspiration/real-estate-web-designs/


const IndexPage = ({ data }) => {
	const homepage = data.allWpPage.edges[0].node.HomepageFields;
	const posts = data.allWpPost.edges;
	const heroImage = getImage(homepage.introImage.localFile.childImageSharp.gastbyImageData);

	console.log('posts', posts);

	return (
		<Layout homepage={true}>
			<main>
				<StyledHero>
					<GatsbyImage image={homepage.introImage.localFile
						.childImageSharp.gatsbyImageData} alt={homepage.introTitle} loading={'eager'} />
					<Container>
						<Row>
							<div className="content">
								<h1>{homepage.introTitle}</h1>
								<p>{homepage.introText}</p>
							</div>
						</Row>
					</Container>
				</StyledHero>

				<OverviewSection title={homepage.overviewTitle} text={homepage.overviewText} />

				<Section bg={true}>
					<Container>
						<Row>
							<Col lg={6}>
								<StyledOverviewImages>
									<Parallax translateY={[-20, 35]}>
										<GatsbyImage image={homepage.overviewImage.localFile
											.childImageSharp.gatsbyImageData} alt="Overview Image" />
									</Parallax>
									<div
										css={css`
											position: absolute;
											top: -2rem;
											right: 0;
										`}
									>
										<Parallax translateY={[20, -35]}>
											<GatsbyImage image={homepage.overviewParallaxImage.localFile
												.childImageSharp.gatsbyImageData} alt="Overview Image" />
										</Parallax>
									</div>
								</StyledOverviewImages>
							</Col>
							<Col lg={6}>
								<StyledOverviewTextWrap>
									<div className="inner">
										<div>

											<p>{homepage.propertiesText}</p>
										</div>
										<Link to="/properties" >
											<Button>Learn More</Button>
										</Link>
									</div>
								</StyledOverviewTextWrap>
							</Col>
						</Row>
					</Container>
				</Section>

				<Section title={homepage.propertiesTitle} text={homepage.propertiesText} >
					<PropertiesSlider collection={homepage.featuredProperties} />
				</Section>

				<Section title={homepage.teamTitle} text={homepage.teamText} >
					<Link to="/team" >
						<Button>Meet The Team</Button>
					</Link>
				</Section>

				<Section title={homepage.newsTitle} text={homepage.newsText} >
					<NewsGrid posts={posts} />
				</Section>
			</main>
		</Layout >
	)
}

export default IndexPage

export const Head = () => <title>Home Page</title>

// Todo: This raises a warning, is this still the right way to query?
export const indexQuery = graphql`
{
  allWpPage(filter: {slug: {eq: "homepage"}}) {
    edges {
      node {
        id
        HomepageFields {
          introTitle
          introText
		  overviewTitle
          propertiesTitle
		  propertiesText
		  overviewText
          teamText
          teamTitle
          newsTitle
          newsText
          introImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH, 
				)
              }
            }
          }
		  overviewImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH, 
				)
              }
            }
          }
		 overviewParallaxImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH, 
				)
              }
            }
          }
          featuredProperties {
            ... on WpProperty {
              id
              link
              title
            }
          }
          featuredNews {
            ... on WpPost {
              id
              link
              title
              excerpt
            }
          }
        }
      }
    }
  }
  allWpPost(limit: 3) {
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
}
`