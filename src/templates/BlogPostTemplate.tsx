import * as React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'reactstrap'

import SEO from '../components/SEO'

export const BlogPostTemplate = ({
  title,
  description,
  html,
}: BlogPostTemplateProps) => {
  return (
    <div>
      <SEO title={title} description={description} />
      <Container className="contentWrapper">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </Container>
    </div>
  )
}

interface BlogPostTemplateProps {
  title: string
  description: string
  html: string
}

const BlogPost = ({ data }: BlogPostProps) => {
  const { markdownRemark: blogPost } = data
  const {
    html,
    frontmatter: { title, description },
  } = blogPost

  return (
    <BlogPostTemplate title={title} description={description} html={html} />
  )
}

interface BlogPostProps {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
        description: string
      }
    }
  }
}

export default BlogPost

export const pageQuery = graphql`
  query BlogByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
