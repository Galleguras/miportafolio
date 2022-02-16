import React from 'react'

import styled from 'styled-components'
import { device } from '../../styles/responsive'

const Foter = styled.footer`
    width: 100%;
    height: 100vh;
    background-color: black;
    color: white;
    padding-top: 180px;
    position: fixed;
    z-index: -2;
    bottom: 0;
    left: 0;
`

const FooterInfo = styled.div`
    font-size: 35px;
    padding: 30px 0 30px 50px;
    width: 70%;
    margin: 0 auto;
    h1 {
        padding-bottom: 15px;
    }
    ${device.pc`text-align: center;padding: 0;font-size: 20px;`}
`

const FooterContact = styled.div`
    font-size: 22px;
    padding: 100px 0 30px 50px;
    width: 70%;
    margin: 0 auto;
    ${device.pc`font-size: 16px;padding: 100px 0 30px 0;text-align: center;`}
`
const FooterSns = styled.div`
    width: 70%;
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    ${device.pc`grid-template-columns: 1fr;text-align: center;`}
`
const snsLinks = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    i {
        color: white;
        font-size: 35px;
        margin: 0 auto;
        padding-bottom: 10px;
        border-bottom: 4px solid transparent;
        &:hover {
            border-color: white;
            transition: all 0.3s ease-out;
        }
    }
`

const DesignBy = styled.div`
    font-size: 18px;
    padding-left: 50px;
    color: white;
    ${device.pc` padding: 0 0 40px 0;`}
`

const Footer = () => {
    return (
        <Foter>
            <FooterInfo>
                <h1>Your Name</h1>
                <p>Based in Your City</p>
            </FooterInfo>
            <FooterContact>
                <h3>Contact me</h3>
                <p>And let's get down to work</p>
            </FooterContact>
            <FooterSns>
                <DesignBy>Design By Your Name</DesignBy>
                <snsLinks>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i></i>
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i></i>
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i></i>
                    </a>
                </snsLinks>
            </FooterSns>
        </Foter>
    )
}

export default Footer
