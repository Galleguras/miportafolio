import React from 'react'

import styled from 'styled-components'
import { device } from '../../styles/responsive'
const InfoContainer = styled.div`
    width: 100%;
    height: 300px;
    background-color: white;
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
        font-size: 25px;
    }
`

const Info = () => {
    return (
        <InfoContainer>
            <Inf>
                <h1>Let's work together and create something unique</h1>
            </Inf>
        </InfoContainer>
    )
}

export default Info
