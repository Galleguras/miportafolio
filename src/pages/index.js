import React, { useState, useEffect, createContext } from 'react'
import { graphql } from 'gatsby'
import Cover from '../components/cover/Cover'
import Navbar from '../components/navbar/Navbar'
import About from '../components/about/About'
import Slider from '../components/slider/Slider'
import Info from '../components/info/Info'
import Footer from '../components/footer/Footer'
import Helmet from 'react-helmet'
import favicon from '../media/imgPestaña.ico'
import Courses from '../components/courses/Courses'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const IndexPage = () => {
    const { t } = useTranslation()
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
            <p
                style={{
                    position: 'relative',
                    height: '100px',
                    color: 'red',
                    zIndex: 11
                }}
            >
                {t('title')}
            </p>
            <Navbar isScrolling={scrollHeight} />
            <Cover />
            <Courses />
            <About />
            <Slider />
            <Info />
            <Footer />
        </>
    )
}

export default IndexPage

export const query = graphql`
    query ($language: String!) {
        locales: allLocale(filter: { language: { eq: $language } }) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
    }
`
