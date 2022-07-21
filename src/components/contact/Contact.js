import React, { useRef } from 'react'
import * as yup from 'yup'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'

const ContentForm = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
`
const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        debugger
        emailjs
            .sendForm(
                'service_dh4r8jc',
                'template_bupcn7f',
                form.current,
                'BkRCusMAFNcfKCpcH'
            )
            .then(
                (result) => {
                    console.log(result.text)
                },
                (error) => {
                    console.log(error.text)
                }
            )
    }
    return (
        <>
            <form ref={form} onSubmit={sendEmail}>
                <ContentForm>
                    <Typography
                        variant="h4"
                        component="div"
                        display="block"
                        gutterBottom
                        align="center"
                    >
                        Formulario de Conacto
                    </Typography>
                    <TextField
                        id="nombre"
                        name="nombre"
                        label="Nombre"
                        variant="standard"
                        required={true}
                    />
                    <TextField
                        id="apellidos"
                        name="apellidos"
                        label="Apellidos"
                        variant="standard"
                        required={true}
                    />
                    <TextField
                        id="telefono"
                        name="telefono"
                        label="Telefono"
                        variant="standard"
                        required={true}
                    />
                    <TextField
                        id="mail"
                        name="mail"
                        label="Correo Electronico"
                        variant="standard"
                        required={true}
                    />
                    <TextField
                        id="message"
                        name="message"
                        label="Escriba aqui..."
                        multiline
                        rows={4}
                        defaultValue=""
                        variant="standard"
                        required={true}
                        error={false}
                    />
                    <br />
                    <Button type="submit" variant="contained">
                        Enviar
                    </Button>
                </ContentForm>
            </form>
        </>
    )
}

export default Contact
