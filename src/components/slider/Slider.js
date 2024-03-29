import React, { useState } from 'react'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import { useLocationContext } from '../../context/LocationProvider'
import Panel from './Panel'
import './Slider.css'
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
      ${device.pc`flex-direction: row-reverse;`}
    li {
        margin: 5px !important;
        ${device.mobile`  `}
        ${device.tablet``}
    }
    .BrainhubCarousel__trackContainer {
        touch-action: pan-y;
    }
`
const CarouselTitle = styled.div`
    color: white;

    text-align: center;
    font-size: 30px;
    padding: 0 100px 0 100px;
    /*   ${device.pc`width: 100%;text-align: center;padding: 50px 0 50px 0;`} */
`

const Slider = () => {
    const slidesInfo = useTrabajo()
    const { language } = useLocationContext()
    const { t } = useTranslation()
    /*     console.log('slidesInfo-->', slidesInfo) */
    const [value, setValue] = useState(0)
    function onChange(value) {
        setValue(value)
    }

    const slidesInfoFiltrado = slidesInfo.filter((item) => {
        if (item.locale === language) return item
        else return false
    })
    /*     console.log('slidesInfoFiltrado-->', slidesInfoFiltrado) */

    return (
        <CarouselContainer id="SlideContainerCarousel">
            <CarouselTitle>
                <h2>{t('Mis Proyectos')}</h2>
            </CarouselTitle>

            <Carousel
                autoPlay={3000}
                stopAutoPlayOnHover
                animationSpeed={1500}
                offset={10}
                value={value}
                infinite
                slidesPerPage={3}
                onChange={onChange}
                itemWidth={400}
            >
                {slidesInfoFiltrado.map((info, key) => {
                    return <Panel key={key} info={info} />
                })}
            </Carousel>
        </CarouselContainer>
    )
}

export default Slider
