import React from 'react'
import styled from 'styled-components'
import { sizes, device } from '../../styles/responsive'
const SlideContainer = styled.div`
    height: 80%;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background-color: white;
    min-width: inherit;
    display: flex;
    img {
        object-fit: fill;
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
        min-width: 70%;

        border-top-left-radius: 10px;
        opacity: 0.8;
        span {
            color: white;
            display: block;
            font-size: 22px;
            padding: 20px 0 20px 10px;
            text-align: center;
        }
    }
`

const Panel = ({ info }) => {
    console.log('info-->>', info)
    return (
        <SlideContainer>
            <img src={info.imagen.srcSet} alt={info.imagen.filename} />
            <div>
                <span>{info.empresa}</span>
            </div>
        </SlideContainer>
    )
}

export default Panel
