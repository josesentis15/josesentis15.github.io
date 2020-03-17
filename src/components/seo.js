import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ description, lang = 'en', meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            job
            name
            description
          }
        }
      }
    `
  );

  const webTitle = `${site.siteMetadata.name} - ${site.siteMetadata.job}`;
  const titleTemplate = title ? `%s | ${webTitle}` : `%s`;
  const metaDescription = description || site.siteMetadata.description;
  const metaTitle = title || webTitle;
  const siteUrl = site.siteMetadata.siteUrl;
  const ogImage = site.siteMetadata.image;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: metaTitle
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:image`,
          content: ogImage
        },
        {
          property: `og:url`,
          content: siteUrl
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:title`,
          content: metaTitle
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
      ].concat(meta)}
    >
      <link rel="apple-touch-icon-precomposed" sizes="57x57" href="favicon/apple-touch-icon-57x57.png" />
      <link rel="apple-touch-icon-precomposed" sizes="114x114" href="favicon/apple-touch-icon-114x114.png" />
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="favicon/apple-touch-icon-72x72.png" />
      <link rel="apple-touch-icon-precomposed" sizes="144x144" href="favicon/apple-touch-icon-144x144.png" />
      <link rel="apple-touch-icon-precomposed" sizes="60x60" href="favicon/apple-touch-icon-60x60.png" />
      <link rel="apple-touch-icon-precomposed" sizes="120x120" href="favicon/apple-touch-icon-120x120.png" />
      <link rel="apple-touch-icon-precomposed" sizes="76x76" href="favicon/apple-touch-icon-76x76.png" />
      <link rel="apple-touch-icon-precomposed" sizes="152x152" href="favicon/apple-touch-icon-152x152.png" />
      <link rel="icon" type="image/png" href="favicon/favicon-196x196.png" sizes="196x196" />
      <link rel="icon" type="image/png" href="favicon/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/png" href="favicon/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="favicon/favicon-16x16.png" sizes="16x16" />
      <link rel="icon" type="image/png" href="favicon/favicon-128.png" sizes="128x128" />
      <meta name="application-name" content="&nbsp;"/>
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-TileImage" content="favicon/mstile-144x144.png" />
      <meta name="msapplication-square70x70logo" content="favicon/mstile-70x70.png" />
      <meta name="msapplication-square150x150logo" content="favicon/mstile-150x150.png" />
      <meta name="msapplication-wide310x150logo" content="favicon/mstile-310x150.png" />
      <meta name="msapplication-square310x310logo" content="favicon/mstile-310x310.png" />
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
};

export default SEO;
