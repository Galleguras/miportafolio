import React from 'react'
import styled from 'styled-components'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import { graphql, useStaticQuery } from 'gatsby'

const CoursesContainer = styled.div`
    display: flex;
    background-color: white;
    color: black;
    height: 70vh;
`

const BorderedAvatar = styled(Avatar)`
    border: 3px solid black;
    img {
        object-fit: cover;
        width: 40px;
    }
`

const Courses = () => {
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
    console.clear()
    console.log('formacion-->', formacion.nodes)

    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#f5f5f9',
            color: 'rgba(0, 0, 0, 0.87)',
            maxWidth: 220,

            border: '1px solid #dadde9'
        }
    }))

    return (
        <CoursesContainer>
            <List
                sx={{
                    width: '100%',
                    overflow: 'auto',
                    maxHeight: 300,
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
                                            ></img>
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
        </CoursesContainer>
    )
}

export default Courses
