import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import React from 'react'

const Header = ({ siteTitle }) => {
    const { languages, originalPath } = useI18next()
    return (
        <>
            <ButtonGroup
                style={{
                    color: `white`
                }}
                variant="text"
                aria-label="text button group"
            >
                {languages.map((lng) => (
                    <Button>
                        <Link
                            style={{
                                color: `white`,
                                textDecoration: `none`
                            }}
                            to={originalPath}
                            language={lng}
                        >
                            {lng}
                        </Link>
                    </Button>
                ))}
            </ButtonGroup>
        </>
    )
}
export default Header
