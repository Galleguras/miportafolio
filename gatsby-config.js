const { resolve } = require(`path`)
const { platform } = require(`os`)
module.exports = {
    siteMetadata: {
        title: `Portafolio Pablo`,
        description: `Mi portafolio virtual desarrollado con Gatsby.`,
        author: `@PabloGallegoCarmona`,
        siteUrl: `https://pablogallegocarmona.xyz/`,
        image: `/gatsby-icon.png`
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                //G-RG794RYRY0
                trackingId: 'G-4BE3HYCFCT',
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: true,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ['/preview/**', '/do-not-track/me/too/'],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Enables Google Optimize using your container Id
                optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
                // Enables Google Optimize Experiment ID
                experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
                // Set Variation ID. 0 for original 1,2,3....
                variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
                // Defers execution of google analytics script after page load
                defer: false,
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: 'example.com',
                // defaults to false
                enableWebVitalsTracking: true
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/locales`,
                name: `locale`
            }
        },
        {
            resolve: `gatsby-plugin-react-i18next`,
            options: {
                localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
                languages: [`en`, `es`],
                defaultLanguage: `en`,
                // if you are using Helmet, you must include siteUrl, and make sure you add http:https
                siteUrl: `https://example.com/`,
                // you can pass any i18next options
                i18nextOptions: {
                    interpolation: {
                        escapeValue: false // not needed for react as it escapes by default
                    },
                    keySeparator: false,
                    nsSeparator: false
                }
            }
        },
        {
            resolve: `gatsby-source-datocms`,
            options: {
                apiToken: `3698c06313413ffdab01d83fb600ab`,
                preview: false,
                disableLiveReload: false
            }
        },
        /*      `gatsby-plugin-react-helmet`, */
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `media`,
                path: `${__dirname}/src/media`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,

        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        `gatsby-plugin-styled-components`,

        {
            resolve: `gatsby-transformer-video`,
            options: {
                /**
                 * Alternative directory for the video cache
                 * Default: '.cache-video'
                 */
                cacheDirectory: resolve('node_modules', '.cache-video'),

                /**
                 * Alternative directory for the ffmpeg binaries
                 * Default: resolve(`.bin`, `gatsby-transformer-video`)
                 */
                cacheDirectoryBin: resolve('node_modules', '.cache-video-bin'),

                /**
                 * Set if FFMPEG & FFPROBE should be downloaded if they are not found locally
                 *
                 * Downloaded binaries are stored in `.bin/gatsby-transformer-video/`
                 *
                 * Default: true
                 */
                downloadBinaries: false,

                /**
                 * Pass your own FFMPEG && FFPROBE binaries
                 *
                 * Assumes you store your binaries in the following pattern:
                 * ./bin/darwin/ffmpeg
                 * ./bin/darwin/ffprobe
                 * ./bin/linux/ffmpeg
                 * ./bin/linux/ffprobe
                 * ...
                 *
                 * Default: null
                 */
                ffmpegPath: resolve(__dirname, 'bin', platform(), 'ffmpeg'),
                ffprobePath: resolve(__dirname, 'bin', platform(), 'ffprobe'),

                /**
                 * Define custom profiles to convert videos with full fluent-ffmpeg access
                 *
                 * Learn more: https://github.com/fluent-ffmpeg/node-fluent-ffmpeg
                 */
                profiles: {
                    sepia: {
                        extension: `mp4`,
                        converter: function ({
                            ffmpegSession,
                            videoStreamMetadata
                        }) {
                            // Example:
                            // https://github.com/hashbite/gatsby-transformer-video/blob/main/packages/example/gatsby-config.js#L24-L55
                        }
                    }
                }
            }
        }
    ]
}
