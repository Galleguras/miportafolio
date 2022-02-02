import React from 'react'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
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
    const { formacion } = useStaticQuery(graphql`
        query MyQuery {
            formacion: allDatoCmsFormacion {
                nodes {
                    descripcion
                    fechaRealizacion(formatString: "DD MMMM, YYYY")
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
                }
            }
        }
    `)

    return (
        <>
            {' '}
            <List
                sx={{
                    width: '100%',
                    overflow: 'auto',

                    bgcolor: 'background.paper'
                }}
            >
                {formacion.nodes.map((curso) => {
                    return (
                        <ListItem alignItems="flex-start">
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
                                primary={curso.fechaRealizacion}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {`(${curso.horas} horas) `}
                                        </Typography>
                                        {curso.descripcion}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    )
                })}
            </List>
        </>
    )
}

export default CoursesList
