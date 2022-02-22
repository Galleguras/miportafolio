import { graphql, Link } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout/Layout'
const CoverContainer = styled.div`
    height: 100vh;
    width: 100%;
    object-fit: contain;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Trabajos = ({ data, pageContext, uri }) => {
    const { t, i18n } = useTranslation()

    return (
        <>
            <Layout uri={uri}>
                <CoverContainer>
                    <p>{t('p1')}</p>
                    <Link to={'/'}>Volver</Link>
                </CoverContainer>
            </Layout>
        </>
    )
}

export default Trabajos

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
