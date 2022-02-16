import { createTheme, ThemeProvider } from '@mui/material/styles'
import { graphql } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import About from '../components/about/About'
import Courses from '../components/courses/Courses'
import Cover from '../components/cover/Cover'
import Footer from '../components/footer/Footer'
import Info from '../components/info/Info'
import Navbar from '../components/navbar/Navbar'
import Slider from '../components/slider/Slider'
import favicon from '../media/imgPestaña.ico'
import LocationProvider from '../context/LocationProvider'
const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff'
        }
    }
})
const IndexPage = () => {
    const { t } = useTranslation()
    const [scrollHeight, setScrollHeight] = useState(0)
    const [idioma, setIdioma] = useState()
    const handleScroll = () => {
        const position = window.pageYOffset
        setScrollHeight(position)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [scrollHeight])

    return (
        <LocationProvider>
            <ThemeProvider theme={theme}>
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

                <Courses />

                <About />

                <Slider />

                <Info />

                <Footer />
            </ThemeProvider>
        </LocationProvider>
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
