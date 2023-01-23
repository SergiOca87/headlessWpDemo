import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Property from './Property';

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
        slidesToShow: 1,
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
        <Slider
            {...sliderSettings}
            className="feature-slider padding"
        >
            {collection.map((item, index) => (
                <Property property={item} key={index} />
            ))}
        </Slider>
    )
}

export default PropertiesSlider