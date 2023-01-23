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
		height: 50rem;
		img {
			
	
		}
	
	
	}
`;



//TODO: https://en.99designs.es/blog/creative-inspiration/real-estate-web-designs/


const IndexPage = ({ data }) => {
	const homepage = data.allWpPage.edges[0].node.HomepageFields;
	const heroImage = getImage(homepage.introImage.localFile.childImageSharp.gastbyImageData);

	console.log(homepage.introImage);

	return (
		<Layout>
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

				<Section title={homepage.propertiesTitle} text={homepage.propertiesText} >
					<PropertiesSlider collection={homepage.featuredProperties} />
				</Section>

				<Section title={homepage.teamTitle} text={homepage.teamText} >
					<Link to="/team" >
						<Button>Meet The Team</Button>
					</Link>
				</Section>

				<Section title={homepage.newsTitle} text={homepage.newsText} >
					{/* <NewsGrid items={}/> */}
				</Section>
			</main>
		</Layout>
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
}
`