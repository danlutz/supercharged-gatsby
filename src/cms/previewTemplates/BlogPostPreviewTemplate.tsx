import * as React from 'react'
import { CloudinaryContext } from 'cloudinary-react'

import { BlogPostTemplate } from '../../templates/BlogPostTemplate'

const { GATSBY_CLOUDINARY_CLOUD_NAME } = process.env

const BlogPostPreviewTemplate = ({
  entry,
  widgetFor /*,
  widgetsFor,
  getAsset,*/,
}: NetlifyCMSPreviewTemplateProps) => {
  return (
    <CloudinaryContext cloudName={GATSBY_CLOUDINARY_CLOUD_NAME}>
      <BlogPostTemplate
        title={entry.getIn(['data', 'title'])}
        description={entry.getIn(['data', 'description'])}
        html={widgetFor('body')}
      />
    </CloudinaryContext>
  )
}

export default BlogPostPreviewTemplate
