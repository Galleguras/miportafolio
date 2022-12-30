import emailjs from '@emailjs/browser'
import LoadingButton from '@mui/lab/LoadingButton'
import Button from '@mui/material/Button'
import { styled as StyledMui } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useFormik } from 'formik'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'
const ValidationTextField = StyledMui(TextField)({
    '& label.Mui-focused': {
        color: 'black'
    }
})
const ContentForm = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
`

const ContentButtons = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
`

const Contact = ({ handleClose }) => {
    const [loading, setLoading] = useState(false)

    const { t } = useTranslation()
    const validationSchema = Yup.object().shape({
        nombre: Yup.string().required(t('El nombre es obligatorio')),
        apellidos: Yup.string().required(t('El apellido es obligatorio')),
        telefono: Yup.number(t('Debe ser numerico')).required(
            t('El telefono es obligatorio')
        ),
        mail: Yup.string().email().required(t('El email es obligatorio')),
        message: Yup.string()
            .min(20, t('El mensaje es demasiado corto'))
            .max(200, t('El mensaje es demasiado largo'))
            .required(t('El message es obligatorio'))
    })

    const formik = useFormik({
        initialValues: {
            nombre: '',
            apellidos: '',
            telefono: '',
            mail: '',
            Mensaje: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            /*   console.log('values', values) */
        }
    })
    console.log('formikkk-->', formik)

    const form = useRef()
    console.log('xxx->', form)
    const sendEmail = (e) => {
        setLoading(true)
        e.preventDefault()

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

        setLoading(false)
        handleClose()
    }

    return (
        <>
            <form ref={form} onSubmit={sendEmail}>
                <ContentForm>
                    <Typography
                        variant="h4"
                        component="h1"
                        display="block"
                        gutterBottom
                        align="center"
                    >
                        {t('Formulario de Conacto')}
                    </Typography>

                    <ValidationTextField
                        id="nombre"
                        name="nombre"
                        label={`${t('Nombre')}*`}
                        variant="standard"
                        value={formik.values.nombre}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.nombre &&
                            Boolean(formik.errors.nombre)
                        }
                        helperText={
                            formik.touched.nombre && formik.errors.nombre
                        }
                    />
                    <ValidationTextField
                        id="apellidos"
                        name="apellidos"
                        label={`${t('Apellidos')}*`}
                        variant="standard"
                        value={formik.values.apellidos}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.apellidos &&
                            Boolean(formik.errors.apellidos)
                        }
                        helperText={
                            formik.touched.apellidos && formik.errors.apellidos
                        }
                    />
                    <ValidationTextField
                        id="telefono"
                        name="telefono"
                        label={`${t('Telefono')}*`}
                        variant="standard"
                        value={formik.values.telefono}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.telefono &&
                            Boolean(formik.errors.telefono)
                        }
                        helperText={
                            formik.touched.telefono && formik.errors.telefono
                        }
                    />
                    <ValidationTextField
                        id="mail"
                        name="mail"
                        label={`${t('Mail')}*`}
                        variant="standard"
                        value={formik.values.mail}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.mail && Boolean(formik.errors.mail)
                        }
                        helperText={formik.touched.mail && formik.errors.mail}
                    />
                    <ValidationTextField
                        id="message"
                        name="message"
                        label={`${t('Mensaje')}*`}
                        multiline
                        rows={4}
                        variant="standard"
                        value={formik.values.message}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.message &&
                            Boolean(formik.errors.message)
                        }
                        helperText={
                            formik.touched.message && formik.errors.message
                                ? `${formik.errors.message} [${formik.values.message?.length}-200]`
                                : formik.values.message
                                ? ` [${formik.values.message?.length}-200]`
                                : `[0-200]`
                        }
                    />
                    <br />

                    <ContentButtons>
                        <LoadingButton
                            disabled={
                                !form.current ||
                                Object.keys(formik.errors).length !== 0
                            }
                            size="small"
                            loading={loading}
                            variant="standard"
                            type="submit"
                        >
                            {t('Enviar')}
                        </LoadingButton>
                        <Button
                            onClick={() => handleClose()}
                            variant="standard"
                        >
                            {t('Cancelar')}
                        </Button>
                    </ContentButtons>
                </ContentForm>
            </form>
        </>
    )
}
export default Contact
