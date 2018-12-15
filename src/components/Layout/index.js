import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import config from '../../config.js'
import './index.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description', content: config.description
            },
            { name: 'keywords', content: config.keywords },
            { name: 'application-name', content: config.tagline },
            { name: 'msapplication-TileColor', content: '#4DB39A' },
            { name: 'msapplication-TileImage', content: config.profilePic },
            { name: 'msapplication-navbutton-color', content: config.themeColor },
            { name: 'theme-color', content: config.themeColor },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-status-bar-style', content: config.themeColor },
            { name: 'apple-mobile-web-app-title', content: config.tagline },
            { name: 'author', content: config.author },
            { name: 'twitter:card', content: config.twitterCardType },
            { name: 'twitter:site', content: config.siteURL },
            { name: 'twitter:creator', content: config.twitterHandle },
            { name: 'twitter:title', content: config.tagline },
            { name: 'twitter:image', content: config.profilePic },
            { name: 'twitter:image:alt', content: config.tagline },
            { name: 'twitter:description', content: config.description },
            { property: 'og:type', content: config.siteOgType },
            { property: 'og:url', content: config.siteURL },
            { property: 'og:locale', content: 'en' },
            { property: 'og:image:type', content: 'image/png' },
            { property: 'og:title', content: config.tagline },
            { property: 'og:image', content: config.profilePic },
            { property: 'og:image:width', content: config.imageWidth },
            { property: 'og:image:height', content: config.imageHeight },
            { property: 'og:image:alt', content: config.tagline },
            { property: 'og:description', content: config.description },
          ]}
        >
          <html lang='en' prefix='og: http://ogp.me/ns#' />
        </Helmet>

        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
