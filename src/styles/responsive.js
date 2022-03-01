export const sizes = {
    mobile: '480px',
    tablet1: '481px',
    tablet2: '1023px',
    pc: '1024px'
}

export const device = {
    mobile: (styles) => {
        return ` @media only screen and (max-width: ${sizes.mobile}) {${styles}}`
    },
    tablet: (styles) => {
        return ` @media only screen and (min-width: ${sizes.tablet1}) and (max-width: ${sizes.tablet2}) {${styles}}`
    },
    pc: (styles) => {
        return ` @media only screen and (min-width: ${sizes.pc}) {${styles}}`
    }
}
