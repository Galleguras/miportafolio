/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

// gatsby-browser.js
// in gastby-browser.js
/* 
export const shouldUpdateScroll = ({
    routerProps: { location },
    routerProps: { prevLocation }
}) => {
    const { pathname } = location

    
    console.log('pathname-->', pathname)
    console.log('prevLocation-->', prevLocation)

    if (pathname === '/es/' || pathname === '/') {
        const id = document.getElementById('SlideContainerCarousel')
        window.scrollTo({
            top: id?.offsetTop,
            behavior: 'auto'
        })
    } else {
        window.scrollTo(0, 0)
    }

    return false
} */

import './src/styles/global.css'

export const onRouteUpdate = ({ location, prevLocation }) => {
    const { pathname } = location

    console.log('pathname-->', pathname)
    console.log('prevLocation-->', prevLocation)
    if (
        prevLocation?.pathname !== '/es/' &&
        prevLocation?.pathname !== '/' &&
        prevLocation?.pathname !== '/contacto' &&
        prevLocation
    ) {
        const id = document.getElementById('SlideContainerCarousel')
        window.scrollTo({
            top: id?.offsetTop,
            behavior: 'auto'
        })
    } else {
        window.scrollTo(0, 0)
    }

    return false
    /*    
    if (prevLocation || document.referrer.includes('/')) {
        // same domain
    } */
}
