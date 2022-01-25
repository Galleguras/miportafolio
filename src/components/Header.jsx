import React from 'react'
import styled from 'styled-components'
const Head = styled.div`
    border: 1px solid black;
    grid-area: 1 / 1 / 2 / 3;
`
const Header = (props) => {
    return (
        <Head>
            <header>Cabecera</header>
        </Head>
    )
}

export default Header
