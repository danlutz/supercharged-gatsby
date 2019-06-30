import { graphql, useStaticQuery } from 'gatsby'

interface SiteMetaData {
  title: string
  description: string
  language: string
  locale: string
}

const useSiteMetadata = (): SiteMetaData => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            language
            locale
          }
        }
      }
    `,
  )

  return site.siteMetadata
}

export default useSiteMetadata
