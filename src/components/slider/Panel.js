import React from 'react'
import styled from 'styled-components'
import { device } from '../../styles/responsive'
import { Link } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'
const SlideContainer = styled(Link)`
    height: 400px;
    width: 400px;
    border-radius: 1px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background-color: white;

    display: flex;
    /*     li {
        width: auto;
        height: auto;
        min-width: auto;
        min-height: auto;
    } */
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
    ${device.mobile` height: 40%;`}
`

const Panel = ({ info }) => {
    console.log('info-->>', info)
    const { language } = useI18next()
    return (
        <SlideContainer
            to={
                language === 'es'
                    ? `/es/trabajo/${info.slug}`
                    : `trabajo/${info.slug}`
            }
        >
            <img src={info.imagen.srcSet} alt={info.imagen.filename} />
            <div>
                <span>{info.empresa}</span>
            </div>
        </SlideContainer>
    )
}

export default Panel
