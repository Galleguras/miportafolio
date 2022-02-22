import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
const Layout = ({ uri, children }) => {
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
            <Navbar isScrolling={scrollHeight} uri={uri} />
            {children}
        </>
    )
}

export default Layout
