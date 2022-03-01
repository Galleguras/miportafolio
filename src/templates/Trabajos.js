import { graphql, Link } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout/Layout'
import { device } from '../styles/responsive'

const Contenido = styled.div`
    border: 3px solid black;
    display: flex;

    ${device.mobile`flex-direction: column;`};
    ${device.tablet`flex-direction: row; margin-top: 120px`};
    ${device.pc`flex-direction: row; margin: 120px;`};
    > img {
        ${device.pc`flex: 1;   object-fit: contain;`};
        ${device.tablet`flex: 1;`};
        ${device.mobile`flex: 1; `};
    }
    > div {
        overflow-y: scroll;
        ${device.mobile`background-color: #2aeb87; border-top: 3px solid black; padding: 0px;`};
        ${device.tablet`background-color: #ced63b; border-left: 3px solid black; padding: 20px;  flex: 2;  height: 400px;`};
        ${device.pc`background-color: #00fffb; border-left: 3px solid black; padding: 20px;  flex: 2;  height: 500px;`};

        > h2 {
            font-weight: bold;
        }
    }
`
const Trabajos = ({ data, pageContext, uri }) => {
    const { t, i18n } = useTranslation()
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
                    <img src={imagen.fluid.srcSet} alt={imagen.filename} />
                    <div>
                        <h2>{`${fechaInicio} - ${
                            fechaFin ? fechaFin : t('Actualidad')
                        }`}</h2>
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
                </Contenido>
                {/*     <div>Volver</div> */}

                {/*      <Link to={'/'}>volver</Link> */}
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
