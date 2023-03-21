import React from 'react'
import { useSiteMetadata } from '../components/hooks/useSiteMetadata'
import MiFoto from '../media/yo.png'
import favicon from '../media/imgPestaña.ico'
import { useTranslation } from 'gatsby-plugin-react-i18next'

export const SEO = ({ children }) => {
    const { t } = useTranslation()
    const { title, description, author, image, siteUrl } = useSiteMetadata()

    const seo = {
        title: title,
        description: description,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}`,
        autor: `${author}`
    }

    return (
        <>
            <title>{seo.title}</title>
            <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
            <meta name="description" content={seo.description} />

            <meta name="twitter:site" content="@pablogallegoca2" />
            <meta name="twitter:creator" content="@pablogallegoca2" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={MiFoto} />

            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:image" itemprop="image" content={MiFoto} />
            <meta property="og:image:width" content="30" />
            <meta property="og:image:height" content="30" />
            <meta property="og:site_name" content={t('Portafolo Pablo')} />
            <meta property="og:locale" content="es_ES" />
            <meta property="og:type" content="article" />
            {children}
        </>
    )
}
