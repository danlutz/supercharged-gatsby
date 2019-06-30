/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const getTemplateName = (templateKey = '') => {
  switch (templateKey) {
    case 'blogPost':
      return 'BlogPostTemplate'
    default:
      return null
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const markdownRemarkFileNodes = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `)

  const { data, errors } = markdownRemarkFileNodes

  if (errors) {
    errors.forEach(e => console.error(e.toString()))
    return
  }

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    const {
      id,
      fields: { slug },
      frontmatter: { templateKey },
    } = node

    createPage({
      path: slug,
      component: path.resolve(
        `src/templates/${getTemplateName(templateKey)}.tsx`,
      ),
      context: {
        id,
      },
    })
  })
}
