const path = require('path')
const trabajos = require('./src/data/trabajos.json')

exports.createPages = ({ actions }) => {
    for (const trabajo of trabajos.filter(item => item.locale === 'es')) {
        actions.createPage({
            path: `trabajo/${trabajo.slug}`,
            component: path.resolve('src/templates/Trabajos.js'),
            context: { slug: trabajo.slug }
        })
    }
}
