/* eslint-disable @typescript-eslint/camelcase */
import { templateKey, published, title, markdownBody } from '../partials/index'

const blogPost = {
  name: 'blog',
  label: 'Blog',
  folder: 'src/pages/blog',
  create: true,
  slug: '{{slug}}',
  preview_path: 'blog/{{slug}}',
  fields: [
    templateKey('blogPost'),
    published,
    title,
    {
      label: 'Subtitle',
      name: 'subtitle',
      widget: 'string',
    },
    {
      label: 'Description',
      name: 'description',
      widget: 'text',
      hint: 'Important for Search Engine Optimization',
    },
    markdownBody,
  ],
}

export default blogPost
