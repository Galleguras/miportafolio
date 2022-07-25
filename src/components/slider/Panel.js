import { Link } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import styled from 'styled-components'
const SlideContainer = styled(Link)`
    height: 400px;
    width: 400px;
    border-radius: 1px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background-color: white;

    display: flex;

    img {
        height: 100%;
        width: 100%;
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
        min-width: 100%;

        border-top-left-radius: 1px;
        opacity: 0.8;
        span {
            color: white;
            display: block;
            font-size: 22px;
            padding: 10px 0 10px 10px;
            text-align: center;
        }
    }
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
