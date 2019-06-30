import { graphql, useStaticQuery } from 'gatsby'

interface SiteOrigin {
  host: string
  port: string
}

const useSiteMetadata = (): SiteOrigin => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          host
          port
        }
      }
    `,
  )

  return site
}

export default useSiteMetadata
