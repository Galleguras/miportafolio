import { graphql, useStaticQuery } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import React from 'react'
import styled from 'styled-components'
import { device } from '../../styles/responsive'

const CoverContainer = styled.div`
    height: 100vh;
    width: 100%;
    object-fit: contain;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        color: white;
        font-size: 100px;
        ${device.pc`font-size: 70px;text-align: center;`};
        ${device.mobile`font-size: 40px;text-align: center;`}
    }
    video {
        object-fit: cover;
        width: 100%;
        height: 100vh;
        position: absolute;
        z-index: -1;
    }
    p {
        margin-top: 8px;
        color: white;
        font-size: 32px;
        ${device.pc`text-align: center;font-size: 22px;width: 85%;`}
        ${device.mobile`text-align: center;font-size: 18px;`}
    }
    div {
        text-align: center;
        padding: 10px;
    }
`
/* import {graphql,} from "gatsby" */

const Cover = () => {
    const { t } = useTranslation()
    const { image } = useStaticQuery(graphql`
        query {
            image: allFile(
                filter: {
                    publicURL: {
                        eq: "/static/ef3b5d7a4907b843867e1e5461fe889f/coverVideo.mp4"
                    }
                }
            ) {
                edges {
                    node {
                        id
                        absolutePath
                        publicURL
                        childImageSharp {
                            fluid {
                                srcSet
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <CoverContainer>
            <video
                className="video"
                src={image.edges[0].node.publicURL}
                autoPlay
                loop
                muted
                playsinline
            />
            <div>
                <h1> Pablo Gallego Carmona </h1> <p> {t('title')} </p>
            </div>
        </CoverContainer>
    )
}

export default Cover
