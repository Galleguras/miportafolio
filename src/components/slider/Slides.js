import React from 'react'
import './Slider.css'
import styled from 'styled-components'
import { sizes, device } from '../../styles/responsive'
const slidesInfo = [
    {
        src: 'https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg',
        alt: 'Project 1',
        desc: 'Project 1'
    },
    {
        src: 'https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg',
        alt: 'Project 2',
        desc: 'Project 2'
    },
    {
        src: 'https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg',
        alt: 'Project 3',
        desc: 'Project 3'
    }
]

const SlideContainer = styled.div`
    height: 80%;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    img {
        object-fit: contain;
        transition: all 0.2s ease-in-out;

        &:hover {
            transform: scale(1.2);
            opacity: 0.7;
        }
    }
    div {
        background-color: black;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 70%;

        border-top-left-radius: 10px;
        opacity: 0.8;
        span {
            color: white;
            display: block;
            font-size: 22px;
            padding: 20px 0 20px 10px;
        }
    }
`

const slides = slidesInfo.map((slide) => (
    <SlideContainer>
        <img src={slide.src} alt={slide.alt} />
        <div>
            <span>{slide.desc}</span>
        </div>
    </SlideContainer>
))

export default slides
