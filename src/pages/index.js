import { createTheme, ThemeProvider } from '@mui/material/styles'
import { graphql } from 'gatsby'
import React, { useEffect, useState } from 'react'
/* import Helmet from 'react-helmet' */
import About from '../components/about/About'
import Courses from '../components/courses/Courses'
import Cover from '../components/cover/Cover'
import Footer from '../components/footer/Footer'
import Info from '../components/info/Info'
import Slider from '../components/slider/Slider'
import favicon from '../media/imgPestaña.ico'
import LocationProvider from '../context/LocationProvider'
import Layout from '../components/Layout/Layout'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import MiFoto from '../media/yo.png'
export function Head() {
    const { t } = useTranslation()
    return (
        <>
            <title>{t('Portafolo Pablo')}</title>
            <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
            {/* twitter */}
            {/* <meta name="twitter:card" content="summary_large_image" /> */}
            <meta name="twitter:site" content="@pablogallegoca2" />
            <meta name="twitter:creator" content="@pablogallegoca2" />
            <meta name="twitter:title" content="Portafolio Pablo" />
            <meta name="twitter:description" content={t('Portafolo Pablo')} />
            <meta name="twitter:image" content={MiFoto} />

            <meta
                name="description"
                content="Mi portafolio virtual desarrollado con  Gatsby"
            />

            <meta property="og:title" content={t('Portafolo Pablo')} />
            <meta
                property="og:description"
                content={t('Mi portafolio virtual desarrollado con Gatsby')}
            />
            <meta
                property="og:url"
                content="https://pablogallegocarmona.xyz/"
            />

            <meta property="og:image" itemprop="image" content={MiFoto} />
            <meta property="og:image:width" content="30" />
            <meta property="og:image:height" content="30" />

            <meta property="og:site_name" content={t('Portafolo Pablo')} />
            <meta property="og:locale" content="es_ES" />
            <meta property="og:type" content="article" />
        </>
    )
}
const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff'
        }
    }
})
const IndexPage = () => {
    const [scrollHeight, setScrollHeight] = useState(0)

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
                <Layout>
                    {/* <Navbar isScrolling={scrollHeight} /> */}
                    <Cover />
                    <About />
                    <Courses />
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
