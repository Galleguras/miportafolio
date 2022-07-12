import React from 'react'

import styled from 'styled-components'
import { device } from '../../styles/responsive'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import WhatsApp from '../../media/WhatsApp.png'
import Map from '../map/Map'

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
    padding: 150px 0 30px 50px;
    width: 70%;
    margin: 0 auto;
    h1 {
        padding-bottom: 15px;
    }
    ${device.pc`text-align: center;padding: 150px 0 30px 0;font-size: 20px;`}
    ${device.tablet`text-align: center;padding: 150px 0 30px 0;font-size: 20px;`}
     ${device.mobile`text-align: center;padding: 100px 0 30px 0;font-size: 20px;`}
`

const FooterContact = styled.div`
    font-size: 22px;

    width: 70%;
    margin: 0 auto;
    img {
        width: 25px;
        padding: 0 5px;
    }
    ${device.pc`font-size: 16px;padding: 30px 0 30px 0;text-align: center;`}
    ${device.tablet`text-align: center;padding: 30px 0 30px 0;font-size: 20px;`}
     ${device.mobile`text-align: center;padding: 10px 0 30px 0;font-size: 20px;`}
`
const FooterSns = styled.div`
    bottom: 40px;
    left: 0;
    right: 0;
    margin: 0 auto;
    align-items: center;
    text-align: center;
`

const DesignBy = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: white;
    ${device.pc` padding: 0 0 40px 0;`}
`

const Footer = () => {
    const { t } = useTranslation()
    const mailtoHref =
        'mailto:pablogallegocarmona@gmail.com?subject=Contacto desde Portafolio'
    const sendwatsAppMsg = 'https://api.whatsapp.com/send?phone=+34607425619'
    return (
        <Foter>
            <FooterInfo>
                <h1>{t('Pablo Gallego Carmona')}</h1>
                <p>{t('España (Granada) Av. del Conocimiento, 41, 18016')}</p>
                <Map height="100px" width="100px" />
            </FooterInfo>
            <FooterContact>
                <h3>{t('Contacta conmigo')} :</h3>
                <p style={{ fontWeight: 'bold', fontSize: 'x-large' }}>
                    +34 607 42 56 19
                    <a href={sendwatsAppMsg}>
                        <img src={WhatsApp} alt="Chat WhatsApp" />
                    </a>
                </p>

                <a href={mailtoHref}>
                    <p>pablogallegocarmona@gmail.com</p>
                </a>
                <p
                    style={{
                        fontWeight: 'bold',
                        fontSize: 'x-large',
                        marginTop: '50px'
                    }}
                >
                    " {t('Y pongámonos manos a la obra')} "
                </p>
                <FooterSns>
                    <DesignBy>
                        {t('Diseñado por Pablo Gallego Carmona')}
                    </DesignBy>
                </FooterSns>
            </FooterContact>
        </Foter>
    )
}

export default Footer
