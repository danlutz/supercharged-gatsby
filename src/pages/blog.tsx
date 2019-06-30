import * as React from 'react'
import { Link } from 'gatsby'
import { Container } from 'reactstrap'

import useBlogPosts from '../hooks/cms/useBlogPosts'

const BlogPage = () => {
  const blogPosts = useBlogPosts()
  return (
    <Container>
      <h1>Blog</h1>
      {blogPosts.map(blogPost => {
        const {
          id,
          fields: { slug },
          frontmatter: { title },
        } = blogPost
        return (
          <div key={id}>
            <h2>{title}</h2>
            <Link to={slug}>Show post</Link>
          </div>
        )
      })}
    </Container>
  )
}

export default BlogPage
