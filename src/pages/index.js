import { createTheme, ThemeProvider } from '@mui/material/styles'
import { graphql } from 'gatsby'
import React, { useEffect, useState } from 'react'

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

import { SEO } from './../components/seo'
export const Head = () => <SEO />
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
