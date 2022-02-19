import React from 'react'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import { graphql, Link } from 'gatsby'

const Trabajos = ({ data, pageContext }) => {
    const { t, i18n } = useTranslation()

    console.log('data template-->', pageContext)

    return (
        <>
            <div>{pageContext.empresa}</div>
            <p>
                <Trans>p1</Trans>
            </p>
            <p>{t('p1')}</p>
            <Link to={'/'}>Volver</Link>
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
