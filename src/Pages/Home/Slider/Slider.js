import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';
import Slider1 from './../../../Assets/Slider/1.jpg';
import Slider2 from './../../../Assets/Slider/2.jpg';
import Slider3 from './../../../Assets/Slider/3.jpg';

const Slider = () => {
    return (
        <div>
            <Carousel className="img-style">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>The Meadows Hotel</h1>
                        {/* <p>Care for patients since 1832.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>The Meadows Hotel</h1>
                        {/* <p>Full spectrum of heart disease and disorders</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-dark">
                        <h1>The Meadows Hotel</h1>
                        {/* <p>Your primary care physician is the leader of your health care team. </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;