import React from 'react'

import styled from 'styled-components'
import { device } from '../../styles/responsive'
import { useTranslation } from 'gatsby-plugin-react-i18next'
const InfoContainer = styled.div`
    width: 100%;
    height: 300px;
    background: linear-gradient(white, 85%, rgba(0, 0, 0, 0.7));
    color: black;
    margin-bottom: 100vh !important;
    ${device.pc`   
      display: flex;
      flex-direction: column;
         padding:  0; margin:0  `}
`

const Inf = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    h1 {
        text-align: center;
        font-size: 45px;
        font-weight: bold;
    }
`

const Info = () => {
    const { t } = useTranslation()
    return (
        <InfoContainer>
            <Inf>
                <h1>{t('Trabajemos juntos y creemos algo único')}</h1>
            </Inf>
        </InfoContainer>
    )
}

export default Info
