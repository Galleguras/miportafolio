import React from 'react'
import styled from 'styled-components'
import { sizes, device } from '../../styles/responsive'

import miFoto from '../../media/miFoto.jpg'

const AboutContainer = styled.div`
    display: flex;
    background-color: white;
    color: black;
    height: 70vh;
    padding: 100px 10px 100px 0;
    justify-content: space-between;
    outline: 4px solid #000;
    outline-offset: -10px;
    ${device.mobile`   
    
      flex-direction: column;
         padding: 20px 5px 20px 0;   `}
    ${device.tablet`   
    
      flex-direction: column;
         padding: 20px 5px 20px 0;   `} /*   @media (max-width: 350px) {
        background-color: red;
        flex-direction: column;
    } ; */
`
const AboutDesc = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 100px;

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
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    flex: 1;
    box-shadow: 0 0 4px 20px white inset;
`

const About = () => {
    return (
        <AboutContainer>
            <AboutDesc>
                <h3> Let me tell you something about me </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.Omnis provident inventore quod voluptates sequi.Quis,
                    necessitatibus omnis iusto perferendis dolores voluptate et
                    dolorum inventore autem nemo, quos eveniet magni nesciunt.{' '}
                </p>
            </AboutDesc>

            <AboutImg />
        </AboutContainer>
    )
}

export default About
