import React, { useState } from 'react'

import { useLocationContext } from '../../context/LocationProvider'
import Carousel from '../carousel/Carousel'
import styled from 'styled-components'
import { device } from '../../styles/responsive'
import useTrabajo from '../hooks/useTrabajo'
import { useTranslation } from 'gatsby-plugin-react-i18next'
const CarouselContainer = styled.div`
    display: flex;
    vertical-align: center;
    align-items: center;
    background-color: black;
    padding: 30px 0 30px 0;
    ${device.mobile`flex-direction: column;`}
    ${device.tablet`flex-direction: column;`}
    li {
        margin: 5px !important;
        ${device.mobile` height:800px; display: inline-block; margin: 5px !important;`}
        ${device.tablet`margin: 5px !important;`}
    }
`
const CarouselTitle = styled.div`
    color: white;
    width: 30%;
    text-align: center;
    font-size: 30px;
    padding: 0 100px 0 100px;
    /*   ${device.pc`width: 100%;text-align: center;padding: 50px 0 50px 0;`} */
`

const Slider = () => {
    const slidesInfo = useTrabajo()
    const { language } = useLocationContext()
    const { t } = useTranslation()
    console.log('slidesInfo-->', slidesInfo)
    const [value, setValue] = useState(0)
    function onChange(value) {
        setValue(value)
    }

    const slidesInfoFiltrado = slidesInfo.filter((item) => {
        if (item.locale === language) return item
    })
    console.log('slidesInfoFiltrado-->', slidesInfoFiltrado)

    return (
        <CarouselContainer>
            <Carousel />
        </CarouselContainer>
    )
}

export default Slider
