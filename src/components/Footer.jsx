import React from 'react'
import styled from 'styled-components'
const Foot = styled.div`
    border: 1px solid black;
    grid-area: 3 / 1 / 4 / 3;
`
const Footer = (props) => {
    return (
        <Foot>
            <footer>Pie</footer>
        </Foot>
    )
}

export default Footer
