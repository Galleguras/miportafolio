import React from 'react'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import Slides from './Slides'
import './Slider.css'
import styled from 'styled-components'
import { sizes, device } from '../../styles/responsive'
const CarouselContainer = styled.div`
    display: flex;
    vertical-align: center;
    align-items: center;
    background-color: black;
    padding: 30px 0 30px 0;
    ${device.pc`flex-direction: column;`} li {
        margin: 5px !important;
        ${device.mobile`margin: 5px !important;`}
        ${device.tablet`margin: 5px !important;`}
    }
`
const CarouselTitle = styled.div`
    color: white;
    width: 40%;
    text-align: center;
    font-size: 30px;
    padding: 0 100px 0 100px;
    ${device.pc`width: 100%;text-align: center;padding: 50px 0 50px 0;`}
`

const Slider = () => {
    return (
        <CarouselContainer>
            <CarouselTitle>
                <h2>My Projects</h2>
            </CarouselTitle>

            <Carousel
                arrows
                slidesPerPage={3}
                infinite
                animationSpeed={200}
                centered
                offset={50}
                itemWidth={400}
                slides={Slides}
                breakpoints={{
                    960: {
                        slidesPerPage: 1,
                        arrows: false,
                        itemWidth: 250
                    }
                }}
            />
        </CarouselContainer>
    )
}

export default Slider
