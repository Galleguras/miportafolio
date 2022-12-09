/* const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const trabajosQuery = await graphql(`
        query MyQuery {
            allDatoCmsTrabajo(
                filter: { locale: { eq: "es" } }
                sort: { fields: slug }
            ) {
                nodes {
                    clientes
                    slug
                    id
                    locale
                    empresa
                    puesto
                    eht
                    funcion
                    fechaInicio
                    fechaFin
                    imagen {
                        filename
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

    // Template to create dynamic pages from.
    const trabajoTemplate = path.resolve(`src/templates/Trabajos.js`)

    trabajosQuery.data.allDatoCmsTrabajo.nodes.map(
        ({
            slug,
            id,
            locale,
            empresa,
            puesto,
            eht,
            funcion,
            fechaInicio,
            fechaFin,
            imagen,
            clientes
        }) => {
            return createPage({
                path: `trabajo/${slug}`,
                component: trabajoTemplate,
                context: {
                    slug,
                    id,
                    locale,
                    empresa,
                    puesto,
                    eht,
                    funcion,
                    fechaInicio,
                    fechaFin,
                    imagen,
                    clientes
                }
            })
        }
    )
}
 */
