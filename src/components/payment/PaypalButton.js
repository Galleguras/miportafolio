import React from 'react'
import Paypal from 'gatsby-plugin-paypal'

const PaypalButton = () => (
    <Paypal
        style={{
            shape: 'rect',
            color: 'blue',
            layout: 'horizontal',
            label: 'paypal'
        }}
        amount={10.1}
        currency="EUR"
    />
)

export default PaypalButton
