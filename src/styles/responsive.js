export const sizes = { mobile: '400px', tablet: '768px', pc: '1024px' }

export const device = {
    mobile: (styles) => {
        return `  @media (max-width: ${sizes.mobile}) {${styles}}`
    },
    tablet: (styles) => {
        return `  @media (max-width: ${sizes.tablet}) {${styles}}`
    },
    pc: (styles) => {
        return `  @media (max-width: ${sizes.pc}) {${styles}}`
    }
}
