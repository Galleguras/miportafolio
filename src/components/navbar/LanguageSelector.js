import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'
import styled from 'styled-components'
import { device } from '../../styles/responsive'

const ButtonLink = styled(Link)`
    color: white !important;

    text-decoration: none;
    ${device.mobile` transform: scale(0.8);`}
`

const ButtonGrouped = styled(ButtonGroup)`
    color: white !important;
    border-color: white !important;
    ${device.mobile` transform: scale(0.8);`}
`

const LanguageSelector = ({ siteTitle }) => {
    const { languages, originalPath } = useI18next()
    return (
        <>
            <ButtonGrouped variant="text" aria-label="text button group">
                {languages.map((lng) => (
                    <Button>
                        <ButtonLink to={originalPath} language={lng}>
                            {lng}
                        </ButtonLink>
                    </Button>
                ))}
            </ButtonGrouped>
        </>
    )
}
export default LanguageSelector
