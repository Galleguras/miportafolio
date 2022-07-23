import React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import Switch from '@mui/material/Switch'

const validationSchema = yup.object({
    firstName: yup
        .string('Enter your name')
        .min(8, 'Name should be of minimum 8 characters length')
        .required('Name is required'),
    lastName: yup
        .string('Enter your lastname')
        .min(8, 'Lastname should be of minimum 8 characters length')
        .required('Lastname is required'),
    isBusinessNameRequired: yup.boolean(),
    businessName: yup.string().when('isBusinessNameRequired', {
        is: true,
        then: yup.string().required('BusinessName is required')
    })
})

const Contact2 = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            isBusinessNameRequired: false,
            businessName: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('values', values)
        }
    })
    console.log(formik)
    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                name="firstName"
                label="FirstName"
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
                fullWidth
                name="lastName"
                label="LastName"
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <TextField
                fullWidth
                name="businessName"
                label="BusinessName"
                value={formik.values.businessName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                    formik.touched.businessName &&
                    Boolean(formik.errors.businessName)
                }
                helperText={
                    formik.touched.businessName && formik.errors.businessName
                }
            />
            <FormControlLabel
                control={
                    <Switch
                        name="isBusinessNameRequired"
                        checked={formik.values.isBusinessNameRequired}
                        onChange={formik.handleChange}
                        color="primary"
                    />
                }
                label="Is businessName required"
            />
            <Box component="div" mt={1}>
                <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    type="submit"
                >
                    Submit
                </Button>
            </Box>
        </form>
    )
}

export default Contact2
