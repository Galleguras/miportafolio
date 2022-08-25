import { createTheme, ThemeProvider } from '@mui/material/styles'
import { graphql } from 'gatsby'
import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
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
import MiFoto from '../media/yo.jpg'
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

    const { t } = useTranslation()

    return (
        <LocationProvider>
            <ThemeProvider theme={theme}>
                <Helmet>
                    <title>{t('Portafolo Pablo')}</title>
                    <link
                        rel="icon"
                        type="image/png"
                        href={favicon}
                        sizes="16x16"
                    />
                    {/* twitter */}
                    {/* <meta name="twitter:card" content="summary_large_image" /> */}
                    <meta name="twitter:site" content="@pablogallegoca2" />
                    <meta name="twitter:creator" content="@pablogallegoca2" />
                    <meta name="twitter:title" content="Portafolio Pablo" />
                    <meta
                        name="twitter:description"
                        content={t('Portafolo Pablo')}
                    />
                    <meta
                        name="twitter:image"
                        content="https://twitter.com/pablogallegoca2/photo"
                    />

                    <meta
                        name="description"
                        content={t(
                            'Mi portafolio virtual desarrollado con Gatsby'
                        )}
                    />

                    <meta property="og:title" content={t('Portafolo Pablo')} />
                    <meta
                        property="og:description"
                        content={t(
                            'Mi portafolio virtual desarrollado con Gatsby'
                        )}
                    />
                    <meta
                        property="og:url"
                        content="https://pablogallegocarmona.xyz/"
                    />

                    <meta property="og:image" content={MiFoto} />

                    <meta
                        property="og:site_name"
                        content={t('Portafolo Pablo')}
                    />
                    <meta property="og:locale" content="es_ES" />
                    <meta property="og:type" content="article" />
                </Helmet>
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
