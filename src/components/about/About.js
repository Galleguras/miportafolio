import { useTranslation } from 'gatsby-plugin-react-i18next'
import React from 'react'
import styled from 'styled-components'
import miFoto from '../../media/miFoto.png'
import { device } from '../../styles/responsive'
import MiFoto from '../../media/yo.jpg'
const AboutContainer = styled.div`
    display: flex;
    background-color: white;

    height: 60vh;

    border-top: 4px solid black;

    ${device.mobile`flex-direction: column; height: auto !important `}
    ${device.tablet`flex-direction: column; height: auto !important `} 
    ${device.pc`height: 60vh;`}
`
const AboutDesc = styled.div`
    padding: 0px 20px;
    justify-content: center;
    h3 {
        margin-bottom: 30px;
        font-size: 28px;
    }
    p {
        line-height: 1.5;
        text-align: justify;
    }
`

const AboutImg = styled.img``

const About = () => {
    const { t } = useTranslation()
    return (
        <AboutContainer>
            <AboutDesc>
                <h3> {t('Déjame contarte algo sobre mí')}... </h3>
                <p>{t('p1')}</p>
                <p>{t('p2')}</p>
                <p>{t('p3')}</p>
                <p>{t('p4')}</p>
                <p>{t('p5')}</p>
            </AboutDesc>

            <AboutImg src={MiFoto} />
        </AboutContainer>
    )
}

export default About
