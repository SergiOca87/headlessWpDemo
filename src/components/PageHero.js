import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import SecondaryTitle from './layout/SecondaryTitle';

const StyledHero = styled.section`
	min-height: 50rem;
    height: 100%;
	position: relative;
	display: flex;
	align-items: center;

    &:before {
        content: "";
        background-color: rgba(0, 28,60, .5);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

	.content {
		position: relative;
		z-index: 10;
		background-color: rgba(0, 28,60, .8);
		padding: 4rem 3rem;
		max-width: 60rem;

		h1, p {
			color: #fff;
		}

		h1 {
			margin-bottom: 3rem;
			font-size: 4rem;
		}

		p {
			max-width: 40rem;
		}
	}

	.gatsby-image-wrapper {
		position: absolute;
		top: 0, left: 0;
		width: 100%;
		height: 100%;

        img {
			filter: grayscale(1);
			object-position: 50% 70%;
		}
	}

`


function PageHero({ image, title, text }) {
	return (
		<StyledHero>
			<GatsbyImage image={image} alt={title} loading={'eager'} />

			<Container>
				<Row>
					<div
						data-sal="slide-right"
						data-sal-duration="600"
						data-sal-delay="300"
					>
						<div className="content">
							<SecondaryTitle title={title} color={'#fff'} />
							<p>{text}</p>
						</div>
					</div>
				</Row>
			</Container>
		</StyledHero>
	)
}

export default PageHero