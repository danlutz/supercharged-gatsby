import { graphql, useStaticQuery } from 'gatsby'

interface BlogPosts {
  id: string
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    description: string
  }
}

const useBlogPosts = () => {
  const { blogPosts } = useStaticQuery(
    graphql`
      query {
        blogPosts: allMarkdownRemark(
          filter: {
            frontmatter: {
              templateKey: { eq: "blogPost" }
              published: { eq: true }
            }
          }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
              }
            }
          }
        }
      }
    `,
  )

  return blogPosts.edges.map(({ node }) => node) as BlogPosts[]
}

export default useBlogPosts
