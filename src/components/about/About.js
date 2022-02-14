import { useTranslation } from 'gatsby-plugin-react-i18next'
import React from 'react'
import styled from 'styled-components'
import miFoto from '../../media/miFoto.png'
import { device } from '../../styles/responsive'

const AboutContainer = styled.div`
    display: flex;
    background-color: white;
    color: black;
    height: 70vh;
    padding: 100px 10px 100px 0;
    justify-content: space-between;
    outline: 4px solid #000;
    outline-offset: -4px;
    ${device.mobile`   
      display: flex;    
      flex-direction: column;
         padding: 20px 5px 20px 0;   `}
    ${device.tablet`   
      display: flex;
      flex-direction: column;
         padding:  0; margin:0  `}
`
const AboutDesc = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 0 100px;

    h3 {
        margin-bottom: 30px;
        font-size: 28px;
    }
    p {
        line-height: 1.5;
    }
    ${device.mobile`   
     
       flex: 1;
           padding: 0 20px;  `}
    ${device.tablet`   
     
       flex: 1;
           padding: 0 20px;  `}
`

const AboutImg = styled.div`
    background-image: url(${miFoto});
    background-size: 500px 500px;
    background-repeat: no-repeat;
    background-position: center;
    flex: 2;
    ${device.mobile`background-size: 200px 200px;`}
`

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

            <AboutImg />
        </AboutContainer>
    )
}

export default About
