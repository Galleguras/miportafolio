import React from 'react'

import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import { grey } from '@mui/material/colors'
import Tooltip from '@mui/material/Tooltip'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import styled from 'styled-components'
import Donate from '../../media/donate.png'
import WhatsApp from '../../media/WhatsApp.png'
import { device } from '../../styles/responsive'
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
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;
    align-content: stretch;
`

const FooterInfo = styled.div`
    font-size: 10px;
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

    margin: 0 auto;
    img {
        width: 25px;
        padding: 0 5px;
    }
    ${device.pc`font-size: 16px;text-align: center;`}
    ${device.tablet`text-align: center;font-size: 20px;`}
     ${device.mobile`text-align: center;font-size: 20px;`}
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
    padding: 0px 0;
    a {
        vertical-align: middle;
    }
`

const Footer = () => {
    const { t } = useTranslation()
    const mailtoHref =
        'mailto:pablogallegocarmona@gmail.com?subject=Contacto desde Portafolio'
    const sendwatsAppMsg = 'https://api.whatsapp.com/send?phone=+34607425619'
    return (
        <Foter>
            <FooterInfo>
                {/*     <h1>{t('Pablo Gallego Carmona')}</h1> */}

                <p>{t('España (Granada) Av. del Conocimiento, 41, 18016')}</p>
                <Map height="150px" width="200px" />
            </FooterInfo>
            <FooterContact>
                <h3>{t('Contacta conmigo')} :</h3>
                <p style={{ fontWeight: 'bold' }}>
                    +34 607 42 56 19
                    <a href={sendwatsAppMsg}>
                        <img src={WhatsApp} alt="Chat WhatsApp" />
                    </a>
                </p>
                <a href={mailtoHref} style={{ textDecoration: 'none' }}>
                    <p>pablogallegocarmona@gmail.com</p>
                </a>

                <FooterSns>
                    <DesignBy>
                        {t('Diseñado por Pablo Gallego Carmona')}
                        <Tooltip title={t('Descarga el código de GitHub')}>
                            <a href="https://github.com/Galleguras/miportafolio/tree/master">
                                <CloudDownloadIcon
                                    sx={{ color: grey[50], margin: '1px 5px' }}
                                />
                            </a>
                        </Tooltip>
                    </DesignBy>

                    <a href="https://www.paypal.com/donate/?hosted_button_id=EMX9TV2ZRCGZQ">
                        <img
                            src={Donate}
                            style={{
                                width: '100px',
                                padding: '10px'
                            }}
                            alt="Donate"
                        />
                    </a>
                </FooterSns>
            </FooterContact>
        </Foter>
    )
}

export default Footer
