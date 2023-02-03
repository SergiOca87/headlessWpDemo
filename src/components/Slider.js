import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Property from './Property';
import styled from 'styled-components';

const StyledSliderWrap = styled.div`
    .slick-track {
        padding: 3rem 0;
    }

  .feature-slider .slick-slide {
    opacity: .4;
    transform: scale(.9);
    transition: all 1000ms;
    border-radius: 3px;
    z-index: 0;
    position: relative;

  }
  .feature-slider .slick-slide.slick-center {
    opacity: 1;
    transform: scale(1);
    z-index: 10;
    background-color: #fff;
    position: relative;
    &:before {
      opacity: 1;
    }
    &:after {
        opacity: 1;
    }
  }
  .feature-slider .slick-slide.slick-center button {
    opacity: 1;
    transition: opacity 300ms;
  }
  
  .feature-slider .slick-slide div {
    outline: none;
  }
  
  .slick-arrow, .slick-next {
    &:before {
      display: none;
    }
  }
  
  .slick-arrow {
    position: absolute !important;
    z-index: 9999;
  }
  
  .slick-track {
    display: flex;
    align-items: center;
  }
  
  .slick-next {
    right: 0 !important;
  }
  .slick-prev {
    left: 0 !important;
  }
  
`

function PropertiesSlider({ collection }) {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: 'block',
                    width: '30px',
                    height: '30px',
                    borderTop: '1px solid rgba(177, 177, 177, .8)',
                    borderRight: '1px solid rgba(177, 177, 177, .8)',
                    transform: 'rotate(45deg)',
                }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    width: '30px',
                    height: '30px',
                    borderTop: '1px solid rgba(177, 177, 177, .8)',
                    borderLeft: '1px solid rgba(177, 177, 177, .8)',
                    transform: 'rotate(-45deg)',
                }}
                onClick={onClick}
            />
        );
    }

    const sliderSettings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '0',
        slidesToShow: 3,
        speed: 500,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <StyledSliderWrap>
            <Slider
                {...sliderSettings}
                className="feature-slider"
            >
                {collection.map((item, index) => (
                    <Property property={item} key={index} />
                ))}
            </Slider>
        </StyledSliderWrap>
    )
}

export default PropertiesSlider