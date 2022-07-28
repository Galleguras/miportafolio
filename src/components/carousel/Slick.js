import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'
export default class SimpleSlider extends Component {
    render() {
        const settings = {
            autoPlay: true,
            arrows: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        return (
            <div>
                <h2> Single Item</h2>
                <div className="container">
                    <Slider {...settings}>
                        <div>
                            <img src="http://placekitten.com/g/400/200" />
                        </div>
                        <div>
                            <img src="http://placekitten.com/g/400/200" />
                        </div>
                        <div>
                            <img src="http://placekitten.com/g/400/200" />
                        </div>
                        <div>
                            <img src="http://placekitten.com/g/400/200" />
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}
