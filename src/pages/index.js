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
import Layout from '../components/Layout/Layout'

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

    /*    useEffect(() => {
        
        let x = window.history
                 window.scrollTo(0, 0) 
    }, []) */

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

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@TU_USER" />
                    <meta name="twitter:creator" content="@TU_USER" />
                    <meta name="twitter:title" content="Portafolio Pablo" />
                    <meta
                        name="twitter:description"
                        content="Portafolio Pablo"
                    />
                    <meta
                        name="twitter:image"
                        content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
                    />
                    <meta property="og:title" content="Portafolio Pablo" />
                    <meta
                        property="og:description"
                        content="Portafolio Pablo"
                    />
                    <meta
                        property="og:image"
                        content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
                    />
                    <meta property="og:url" content="pablogallegocarmona.xyz" />
                    <meta property="og:site_name" content="Portafolio Pablo" />
                    <meta property="og:locale" content="es_ES" />
                    <meta property="og:type" content="article" />
                    <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
                </Helmet>
                <Layout>
                    {/* <Navbar isScrolling={scrollHeight} /> */}
                    <Cover />
                    <Courses />
                    <About />
                    <Slider />
                    <Info />
                    <Footer />
                </Layout>
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
