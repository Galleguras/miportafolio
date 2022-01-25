import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import favicon from '../media/imgPestaña.ico'
const LayoutContent = styled.div`
    background-color: red;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 50px calc(100vh - 100px) 50px;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`

const Layout = ({ children }) => {
    return (
        <LayoutContent>
            <Helmet>
                <title>Portafolio Pablo</title>
                <link
                    rel="icon"
                    type="image/png"
                    href={favicon}
                    sizes="16x16"
                />
            </Helmet>
            <Header />

            {children}
            <Footer />
        </LayoutContent>
    )
}

export default Layout
