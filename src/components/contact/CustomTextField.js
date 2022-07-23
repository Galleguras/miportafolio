import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'

function CustomField({ InputLabelProps = {}, ...props }) {
    return (
        <TextField
            InputLabelProps={{ shrink: true, ...InputLabelProps }}
            {...props}
        />
    )
}

CustomField.propTypes = {
    classes: PropTypes.object.isRequired
}

export default CustomField
