import { graphql, Link } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout/Layout'
import { device } from '../styles/responsive'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import IconButton from '@mui/material/IconButton'
import { useI18next } from 'gatsby-plugin-react-i18next'
const Contenido = styled.div`
    position: fixed;
    height: calc(100vh - 66px);

    display: flex;
    flex-direction: column;
    margin-top: 66px;

    h2:first-child {
        font-weight: bold;
        padding: 5px;
        background-color: black;
        color: white;
        text-align: center;
        font-size: xx-large;
    }
    > div {
        height: 100%;
        overflow-y: scroll;
        ${device.mobile`padding: 10px;`};
        ${device.tablet` padding: 20px;   `};
        ${device.pc` padding: 20px;    `};

        img {
            width: 300px;
            float: right;
            ${device.mobile`  width: 150px`};
            ${device.tablet`   width: 250px `};
        }
    }
`

const BotonVolver = styled(Link)`
    text-decoration: none;
    justify-content: center;
    display: flex;
`
const Trabajos = ({ data, pageContext, uri }) => {
    const { language } = useI18next()
    const { t } = useTranslation()
    const {
        eht,
        empresa,
        fechaFin,
        fechaInicio,
        funcion,
        imagen,
        puesto,
        clientes
    } = data.allDatoCmsTrabajo.nodes[0]
    return (
        <>
            <Layout uri={uri}>
                <Contenido>
                    <h2>{`${fechaInicio} - ${
                        fechaFin ? fechaFin : t('Actualidad')
                    }`}</h2>
                    <div>
                        <img src={imagen.fluid.srcSet} alt={imagen.filename} />
                        <h2>{t('Empresa')}:</h2>
                        <p>{empresa}</p>
                        <h2>{t('Clientes')}:</h2>
                        <p>{clientes}</p>
                        <h2>{t('Puesto')}:</h2>
                        <p>{puesto}</p>
                        <h2>{t('Funciones')}:</h2>
                        <p>{funcion}</p>
                        <h2>{t('Herramientas/Tecnologías')}:</h2>
                        <p>{eht}</p>
                    </div>
                    <BotonVolver to={language === 'es' ? '/es/' : '/'}>
                        <IconButton sx={{ color: 'black' }}>
                            <ArrowBackIcon fontSize="large" />
                        </IconButton>
                    </BotonVolver>
                </Contenido>
            </Layout>
        </>
    )
}

export default Trabajos

export const query = graphql`
    query ($language: String, $slug: String) {
        allDatoCmsTrabajo(
            filter: { locale: { eq: $language }, slug: { eq: $slug } }
            sort: { fields: slug }
        ) {
            nodes {
                clientes
                slug
                id
                locale
                empresa
                puesto
                eht
                funcion
                fechaInicio
                fechaFin
                imagen {
                    filename
                    url
                    alt
                    fluid {
                        srcSet
                    }
                }
            }
        }
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
