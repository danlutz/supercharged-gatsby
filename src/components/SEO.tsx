import * as React from 'react'
import Helmet from 'react-helmet'

import useSiteMetadata from '../hooks/useSiteMetadata'

const { GATSBY_ORIGIN } = process.env

const SEO = ({
  title,
  description,
  image,
  fbImg,
  twitterImg,
  twitterCardType,
}: SEOProps) => {
  const actualFacebookImg = fbImg || image
  const actualTwitterImg = twitterImg || image

  return (
    <Helmet>
      {title && [
        <title key={`${title}-title`}>{title}</title>,
        <meta key={`${title}-og:title`} name="og:title" content={title} />,
        <meta
          key={`${title}-twitter:title`}
          name="twitter:title"
          content={title}
        />,
      ]}

      {description && [
        <meta
          key={`${description}-description`}
          name="description"
          content={description}
        />,
        <meta
          key={`${description}-og:description`}
          name="og:description"
          content={description}
        />,
        <meta
          key={`${description}-twitter:description`}
          name="twitter:description"
          content={description}
        />,
      ]}

      {actualFacebookImg && (
        <meta name="og:image" content={actualFacebookImg} />
      )}
      {actualTwitterImg && (
        <meta name="twitter:image" content={actualTwitterImg} />
      )}
      {twitterCardType && (
        <meta name="twitter:card" content={twitterCardType} />
      )}
    </Helmet>
  )
}

interface SEOProps {
  title?: string
  description?: string
  image?: string
  fbImg?: string
  twitterImg?: string
  twitterCardType?: 'summary' | 'summary_large_image'
}

export default SEO

export const SEODefaults = () => {
  const { title, description, language, locale } = useSiteMetadata()

  const logoUrl = `${GATSBY_ORIGIN || 'localhost:8000'}/favicon.png`

  return (
    <Helmet>
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={logoUrl} />
      <meta name="og:site_name" content={title} />
      <meta name="og:locale" content={locale} />
      <meta name="og:type" content="website" />

      <meta name="twitter:card" content={'summary'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logoUrl} />
    </Helmet>
  )
}
