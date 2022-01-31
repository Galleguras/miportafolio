import React, { useState, useEffect } from 'react'

import Cover from '../components/cover/Cover'
import Navbar from '../components/navbar/Navbar'
import About from '../components/about/About'
import Slider from '../components/slider/Slider'
import Info from '../components/info/Info'
import Footer from '../components/footer/Footer'
import Helmet from 'react-helmet'
import favicon from '../media/imgPestaña.ico'
const IndexPage = () => {
    const [scrollHeight, setScrollHeight] = useState(0)

    const handleScroll = () => {
        const position = window.pageYOffset
        setScrollHeight(position)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [scrollHeight])

    return (
        <>
            <Helmet>
                <title>Portafolio Pablo</title>
                <link
                    rel="icon"
                    type="image/png"
                    href={favicon}
                    sizes="16x16"
                />
            </Helmet>
            <Navbar isScrolling={scrollHeight} />
            <Cover />
            <About />
            <Slider />
            <Info />
            <Footer />
        </>
    )
}

export default IndexPage
