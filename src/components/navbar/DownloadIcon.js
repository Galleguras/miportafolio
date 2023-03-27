import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Tooltip from '@mui/material/Tooltip'
import PdfInIcon from '@mui/icons-material/PictureAsPdf'
import { useTranslation } from 'gatsby-plugin-react-i18next'
const DownloadIcon = () => {
    const { t } = useTranslation()
    const data = useStaticQuery(graphql`
        {
            allFile(filter: { extension: { eq: "pdf" } }) {
                edges {
                    node {
                        publicURL
                        name
                    }
                }
            }
        }
    `)
    console.log('date-->', data)
    const miCv = data.allFile.edges[0].node.publicURL
    return (
        <>
            <Tooltip title={t('Descargar CV')}>
                <a href={miCv} download>
                    <PdfInIcon />
                </a>
            </Tooltip>
        </>
    )
}
export default DownloadIcon
