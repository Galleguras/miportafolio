import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { useLocationContext } from '../../context/LocationProvider'
import { useTranslation } from 'gatsby-plugin-react-i18next'
const BorderedAvatar = styled(Avatar)`
    border: 2px solid black;
`
const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'white',
        color: 'black',
        border: '2px solid black'
    }
}))
const CoursesList = () => {
    const { language } = useLocationContext()
    const query = graphql`
        query {
            formacion: allDatoCmsFormacion {
                nodes {
                    descripcion
                    fechaRealizacion(formatString: "DD-MM-YYYY")
                    horas
                    imagen {
                        fluid {
                            srcSet
                            src
                        }
                        path
                        filename
                        url
                    }
                    locale
                }
            }
        }
    `
    /*     console.clear()
    console.log('query-->', query) */
    const { formacion } = useStaticQuery(query)
    const { t } = useTranslation()
    return (
        <>
            <List
                sx={{
                    width: '100%',
                    overflow: 'auto',

                    bgcolor: 'background.paper'
                }}
            >
                {formacion.nodes.map((curso) => {
                    if (curso.locale === language) {
                        return (
                            <ListItem alignItems="center">
                                <ListItemAvatar>
                                    <HtmlTooltip
                                        title={
                                            <>
                                                <img
                                                    style={{ width: '200px' }}
                                                    src={curso.imagen.url}
                                                    alt={curso.imagen.filename}
                                                />
                                            </>
                                        }
                                    >
                                        <BorderedAvatar
                                            alt={curso.imagen.filename}
                                            src={curso.imagen.url}
                                        />
                                    </HtmlTooltip>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <Typography
                                            color="#256994"
                                            align="justify"
                                        >
                                            {curso.fechaRealizacion}
                                        </Typography>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {`(${curso.horas} ${t(
                                                    'horas'
                                                )}) `}
                                            </Typography>
                                            {curso.descripcion}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        )
                    } else return null
                })}
            </List>
        </>
    )
}

export default CoursesList
