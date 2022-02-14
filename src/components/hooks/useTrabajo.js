import { graphql, useStaticQuery } from 'gatsby'

const useTrabajo = () => {
    const { slidesInfo } = useStaticQuery(graphql`
        query {
            slidesInfo: allDatoCmsTrabajo {
                nodes {
                    locale
                    empresa
                    fechaInicio
                    fechaFin
                    funcion
                    id
                    eht
                    slug
                    puesto
                    imagen {
                        url
                        alt
                        fluid {
                            srcSet
                        }
                    }
                }
            }
        }
    `)

    return slidesInfo.nodes.map((product) => ({
        locale: product.locale,
        empresa: product.empresa,
        funcion: product.funcion,
        eht: product.eht,
        puesto: product.puesto,
        fechaInicio: product.fechaInicio,
        fechaFin: product.fechaFin,
        imagen: {
            url: product.imagen.url,
            srcSet: product.imagen.fluid.srcSet,
            filename: product.imagen.filename
        }
    }))
}

export default useTrabajo
