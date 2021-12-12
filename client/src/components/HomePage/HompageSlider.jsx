import React from 'react';
import { Carousel } from 'react-bootstrap';

function HompageSlider() {
    return (
        <Carousel className="HomeCarosalSlider">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../../images/HomeSlider/Banner1.jpg").default}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../../images/HomeSlider/Banner2.jpg").default}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../../images/HomeSlider/Banner3.jpg").default}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default HompageSlider
