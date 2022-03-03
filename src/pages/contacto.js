import React from 'react'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import { device } from '../styles/responsive'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import IconButton from '@mui/material/IconButton'
import { Link } from 'gatsby'
const Contenido = styled.div`
    border: 3px solid black;
    display: flex;

    ${device.mobile`flex-direction: column;`};
    ${device.tablet`flex-direction: row; margin-top: 120px`};
    ${device.pc`flex-direction: row; margin: 120px 120px 50px 120px`};
`

const BotonVolver = styled(Link)`
    text-decoration: none;
    justify-content: center;
    display: flex;
`

const contacto = () => {
    return (
        <Layout uri={true}>
            <Contenido>
                <h1>asd</h1>
            </Contenido>
            <BotonVolver to={'/'}>
                <IconButton sx={{ color: 'black' }}>
                    <ArrowBackIcon fontSize="large" />
                </IconButton>
            </BotonVolver>
        </Layout>
    )
}

export default contacto
